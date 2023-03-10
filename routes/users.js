const express = require('express');
const router = express.Router();
const passport = require('passport');

const UserController = require('../controllers/users_controller');

// router.get('/profile', usersController.profile);

// router.get('/sign-up', usersController.signup);
// router.get('/sign-in', usersController.signin);


// router.post('/create', usersController.create);

// // use passport as a middleware to authenticate
// router.post('/create-session', passport.authenticate(
//     'local',
//     {failureRedirect: '/users/sign-in'},
// ), usersController.createSession);

// module.exports = router;
router.get('/profile',UserController.profile);
router.get("/sign-up",UserController.signup);
router.get("/sign-in",UserController.signin);
router.post('/create',UserController.create);
router.post('/create-session',UserController.createSession);
module.exports =router;
