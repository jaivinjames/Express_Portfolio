/**
 * Name : Jaivin James
 * Student ID: 301177233
 * Date: 23 October 2021
 * File Name: Express-Portfolio with Authentication
 */

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