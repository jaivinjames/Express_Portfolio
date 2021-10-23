let mongoose = require('mongoose');

// create a model class
let ContactModel = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
},
{
    collection: "user"
});

module.exports = mongoose.model('Contact', ContactModel);