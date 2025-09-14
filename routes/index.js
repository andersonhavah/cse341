const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.andersRoute);

module.exports = routes;
