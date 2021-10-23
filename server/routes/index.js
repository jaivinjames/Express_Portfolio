let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/aboutMe', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contactMe', indexController.displayContactPage);

/* GET Route for displaying the Login page - CREATE Operation */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page - CREATE Operation */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page - CREATE Operation */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page - CREATE Operation */
router.post('/register', indexController.processRegisterPage);

/* GET Route for User Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
