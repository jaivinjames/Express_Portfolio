/**
 * Name : Jaivin James
 * Student ID: 301177233
 * Date: 23 October 2021
 * File Name: Express-Portfolio with Authentication
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

/*
// connect to our Contact Model
let Contact = require('../models/contact');
*/

let contactController = require('../controllers/contacts');

// Helper Function for Guarding
function requireAuth(req, res, next)
{
    // Check if user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
/* GET Route for the Contact List page - READ Operation */
router.get('/', requireAuth, contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
//router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
//router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;