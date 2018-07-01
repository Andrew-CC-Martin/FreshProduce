const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash')
const bcrypt = require('bcryptjs');

//Drivers + admin
const UserSchema = new mongoose.Schema({
        name: {
            type: String
        },
        email: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not valid email'
            }
        },
        password: {
            type: String,
            require: true,
            minlength: 6
        },
        tokens: [{
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }]
        }
)

// Instance methods
// To limit the number of attributes returned
//Capital User refers to the model, lowercase refers to the instance
UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject, ['_id', 'name', 'email'])
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    // jwt takes payload and the secret key as parameters, in this case payload = the user id
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat({access,token});
    
    return user.save().then( () => {
      return token;
    });
};
//UserSchema statics object, adds a method to the schema
UserSchema.statics.findByToken = function(token) {
    var User = this;
    var decoded;

    try {
      decoded = jwt.verify(token, 'abc123')
    } catch (e) {
        return Promise.reject();
        }
    
    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
    };

// find user when first login
UserSchema.statics.findByCredentials = function(email, password) {
    var User = this;

    return User.findOne({email}).then((user) => {
        if (!user) {
            return Promise.reject();
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    resolve(user);
                } else {
                    reject()
                }
            } )
        })
    });
    };

//Hash the password before it is saved to the DB (user.save()) but only
// when the password is "modified"
UserSchema.pre('save', function (next){
    var user = this;
    
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err,hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

UserSchema.methods.removeToken = function (token) {
    let user = this;

    return user.update({
        $pull: {
            tokens: {
                token: token
            }
        }
    })
}

const User = mongoose.model('User', UserSchema);

module.exports = {User};