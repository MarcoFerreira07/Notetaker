const notesRoute = require('express').Router();
const uuid = require('../db/uuid');

const { readFromFile, readAndAppend} = require('../db/fsUtils');

notesRoute.get('/', (req, res) => {
    console.info(`${req.method} notes have been recieved`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  notesRoute.post('/', (req,res) => {
    console.info(`${req.method} request to submit note`);

    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');

        const response = {
            body: newNote,
        };

        res.json(response);
    }else{
        res.json('ERROR IN POST');
    }
  });

  module.exports = notesRoute;