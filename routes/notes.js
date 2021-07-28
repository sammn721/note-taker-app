const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils.js');

notes.get('/', (req, res) =>
    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };
        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };
        res.json(response);
    } else {
        res.json('Error in posting new note');
    }
});

// app.delete('/api/notes/:id', (req, res) => {
//     res.send('deleted')
// });

module.exports = notes;