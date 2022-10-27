const indexRoute = require('express').Router();

const notesRoute = require('./notesRoute');

indexRoute.use('/notes', notesRoute);










module.exports = indexRoute;