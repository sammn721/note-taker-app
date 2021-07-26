const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express()
const newNote = {
    "title":"A new note",
    "text":"Testing text"
};

// fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
//     const notes = JSON.parse(data);
//     const notesJSON = JSON.stringify(notes);
// });
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/notes', function (req, res) {
    //return notes.html
});

app.get('/api/notes', function (req, res) {
    fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
        const notes = JSON.parse(data);
        const notesJSON = JSON.stringify(notes);
    });
});

app.post('/api/notes', function (req, res)  {
    //receive new note to save on request body
    //add note to db.json files
    //return new note
})
 
app.listen(3000)

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});