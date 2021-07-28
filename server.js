// const fs = require('fs');
// const util = require('util');
const express = require('express');
const path = require('path');
const api = require('routes/index.js');
const { v4: uuidv4 } = require('uuid');
const { 
    readFromFile,
    writeToFile,
    readAndAppend
} = require('./helpers/fsUtils.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    res.readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)))
);

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };
        readAndAppend(newNote, 'db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };
        res.json(response);
    } else {
        res.json('Error in posting new note');
    }
});

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening on PORT http://localhost:${PORT}`)
);

// const newNote = {
//     "title":"A new note",
//     "text":"Testing text"
// };



// app.delete('/api/notes/:id', (req, res) => {
//     res.send('deleted')
// });