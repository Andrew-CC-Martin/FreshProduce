require('dotenv').config();
// require('./config/config');

// The server is responsible for the routes only
// libary imports
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const cors = require('cors');
const nodemailer = require('nodemailer')
const crypto = require('crypto');
const async = require('async');


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
        console.log('hi register', user)
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

//Sign out User
app.delete('/users/token/:id', (req, res) => {
    var id = req.params.id;
    console.log('token',id)
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    
    User.findById(id)
    .then((user) => { user.removeToken(user.tokens[0].token).then(() => {
        console.log('without token',user)
        res.status(200).send();
    }, () => {
        res.status(400).send();
    })
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
        console.log('token',user)
        res.send({ user });
    }).catch((e) => {
        res.status(400).send();
    });
});



//Contact us option from users
app.post('/contactus', (req, res) => {
    // console.log(req.body)
        const htmlEmail = `
        <h3> Contact Details </h3>
        <ul>
        <li>Name: ${req.body.name} </li>
        <li>Email: ${req.body.email} </li>
        </ul>
            <h3>Message</h3>
            <p>${req.body.message} </p>
        `
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_COMPANY,
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: 'andresrgal@zoho.com',
        to: 'andresrgal@zoho.com',
        replyTo: req.body.email,
        subject: req.body.email,
        text: req.body.message,
        html: htmlEmail
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId, info.response);
            res.send('ok')
    })
})

//User option to send invoice to email
app.post('/user/inv', (req, res) => {
    // console.log(req.body)
        const htmlEmail = `
        <h3> Invoice Details </h3>
        <ul>
            <li>Email: ${req.body.email} </li>
            </ul>
            <h3>Invoice Component</h3>
            <p>Products Ordered</p>
        `
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_COMPANY,
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_COMPANY,
        to: process.env.EMAIL_USER,
        replyTo: process.env.EMAIL_COMPANY,
        subject: 'Your Envoice',
        text: 'INVOICE COMPONENT',
        html: htmlEmail
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId, info.response);
            res.send('ok')
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});

//User forgot password route
//Used crypto from node to generate a 20 byte random buf and then convert to hex.
app.post('/forgot', function(req, res, next) {
    console.log(req.body)
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          console.log('token --', token)
          done(err, token);
        });
      },
      function(token, done) {
        User.findOne({ email: req.body.email }, function(err, user) {
          if (!user) {
              console.log('no user')
              console.log(err)
            // req.flash('error', 'No account with that email address exists.');
            return res.redirect('/forgot');
          }
  //Want to set a expire time to generated token.
          user.tokens.token = token;
        //   user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_COMPANY,
                pass: process.env.PASS
            }
        });
        let mailOptions = {
            from: process.env.EMAIL_COMPANY,
            to: process.env.EMAIL_USER,
            replyTo: process.env.EMAIL_COMPANY,
            subject: 'Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://' + req.headers.host + '/reset/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n',
            html: htmlEmail
        };
        transporter.sendMail(mailOptions, (error) => {
            req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
          done(error, 'done');
        });
      }
    ], function(err) {
      if (err) return next(err);
      res.redirect('/forgot');
    });
  });



//Call back to know when the server is running
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  
  module.exports = {app};