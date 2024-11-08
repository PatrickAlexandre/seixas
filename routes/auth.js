const express = require('express');
const { check, body } = require('express-validator');
const authController = require('../controllers/auth');
const dbAdapter = require('../database');

const authRouter = express.Router();

authRouter.get('/login', authController.getLogin);
authRouter.get('/signup', authController.getSignup);
authRouter.post('/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .normalizeEmail(),
    body('password', 'Password must be valid.').isLength({ min: 7, max: 100 }),
  ],
  authController.postLogin
);
authRouter.post('/signup',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return dbAdapter.getUserBySearchParam({ email: value })
          .then((userDoc) => {
            if (userDoc) {
              return Promise.reject('Email already in use.');
            }
          });
      })
      .normalizeEmail(),
    body(
      'password',
      'Please use a password between 8 and 100 characters.'
    ).isLength({ min: 8, max: 100 }),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match.');
      }
      return true;
    }),
  ],
  authController.postSignup
);
authRouter.post('/logout', authController.postLogout);
authRouter.get('/reset-password', authController.getResetPassword);
authRouter.post('/reset-password', authController.postResetPassword);
authRouter.get('/reset-password/:token', authController.getNewPassword);
authRouter.post('/new-password', authController.postNewPassword);

module.exports = authRouter;
