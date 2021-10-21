let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to Users-info model
let User = require('../models/users-info');

// Get Route for User list
router.get('/', (req, res, next) => {
    User.find((err, UsersList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(UsersList);

            res.render('users-info', {title: 'Users List', UsersList: UsersList});
        }
    });
});

module.exports = router;