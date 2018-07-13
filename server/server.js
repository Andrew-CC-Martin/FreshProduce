require('dotenv').config();
// require('./config/config');

// The server is responsible for the routes only
// libary imports
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash')
const cors = require('cors')

//Local imports
var {mongoose} = require('./db/mongoose.js');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');
const {ObjectID} = require('mongodb');

//External imports
var app = express();
const port = process.env.PORT;
//add middleware using bodyparser returns a function sending json to the app 
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

// Register a user
app.post('/register', (req, res) => {
    let body = _.pick(req.body, ['name','email','password'])
    let user = new User(body);

    user.save().then((user) => {
        return user.generateAuthToken();
    }).then((token) => {        
        res.json(Object.assign({ token }, { _id: user.id, email: user.email, name: user.name }))
    }).catch((e) => {
        res.status(400).send("User already exists");
    });
});

//list of users
app.get('/users', (req,res) => {
    User.find().then((users) => {
        res.send({users});
    }, (e) => {
        res.status(400).send(e);
    })
});

//Sign in a user
app.post('/users/login', (req, res) => {
    let body = _.pick(req.body, ['email','password']);
    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.json(Object.assign({ token }, { _id: user.id, email: user.email, name: user.name }))
            // res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        console.log(e)
        res.status(400).send(e);
    });
});

//Request a user by id
app.get('/users/:id', (req, res) => {
    var id = req.params.id;
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    User.findById(id).then((user) => {
      if (!user) {
        return res.status(404).send();
      }
  
      res.send({user});
    }).catch((e) => {
      res.status(400).send();
    });
  });

  //Update User
  app.patch('/users/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['name', 'email']);
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    User.findOneAndUpdate({_id: id}, {$set: body}, {new: true}).then((user) => {
      if (!user) {
        return res.status(404).send();
      }
  
      res.send({user});
    }).catch((e) => {
      res.status(400).send();
    })
  });
  
  

//Delete a user by id
app.delete('/users/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    User.findOneAndRemove({
        _id: id,
    }).then((user) => {
        if (!user) {
            return res.status(404).send();
        }

        res.send({ user });
    }).catch((e) => {
        res.status(400).send();
    });
});


//Call back to know when the server is running
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  
  module.exports = {app};