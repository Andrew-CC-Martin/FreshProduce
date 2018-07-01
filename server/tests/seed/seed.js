// const {ObjectID} = require('mongodb');
// const 

// const {User} = require('./../../models/user');

// //seed data, first user with auth token, second without
// const userOneId = new ObjectID();
// const userTwoId = new ObjectID();
// const users = [{
//     _id: userOneId,
//     email: "mario@sample.com",
//     password: "userOnePass",
//     tokens: [{
//         access: 'auth',
//         token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
//     }]
// }, {
//     _id: userTwoId,
//     email: "jen@sample.com",
//     password: "userTwoPass"

// }];
// //wipe all the users before the test is run
// const populateUsers = (done) => {
//     User.remove({}).then(() => {
//         var userOne = new User(users[0]).save();
//         var userTwo = new User(users[1]).save();
//         return Promise.all([userOne, userTwo].then(() => {
//         }).then(() => done()))
//     })
// }

// module.exports = {users, populateUsers};