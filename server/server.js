// The server is responsible for the routes only
// libary imports
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash')

//local imports
var {mongoose} = require('./db/mongoose.js');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
//add middleware using bodyparser returns a function sending json to the app 
app.use(bodyParser.json());

app.post('/users', (req, res) => {
    let body = _.pick(req.body, ['name','email','password'])
    let user = new User(body);

    user.save().then((user) => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

// list of users
app.get('/users', (req,res) => {
    User.find().then((users) => {
        res.send({users});
    }, (e) => {
        res.status(400).send(e);
    })
});

//private route to test if a user already in our db will get access
app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user)
});

//Sign in route
app.post('/users/login', (req, res) => {
    let body = _.pick(req.body, ['name','email','password']);
    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/users/me/token', authenticate, (req,res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    });
});


//for Heroku
const PORT = process.env.PORT || 5000;
//Call back to know when the server is running
app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`)
});