const Joi = require('joi');
const JWT = require('jsonwebtoken');
const models = require('../../models');
const login = require('./login');
const signup = require('./signup');

const GROUP_NAME = 'user';

module.exports = [
  login(GROUP_NAME, { JWT, Joi, models }),
  signup(GROUP_NAME, { Joi, models }),
];