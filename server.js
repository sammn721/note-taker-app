const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('root')
// });

app.get('/notes', (req, res) => {
    // return notes.html
    res.send('notes')
});

app.get('/api/notes', (req, res) => {
    res.send('api notes')
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    const newNote = req.body;
    fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
        const notes = JSON.parse(data);
        const notesJSON = JSON.stringify(notes);
    });
    res.send('posted');
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