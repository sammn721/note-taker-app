const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`);
});

const newNote = {
    "title":"A new note",
    "text":"Testing text"
};

// fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
//     const notes = JSON.parse(data);
//     const notesJSON = JSON.stringify(notes);
// });
 
app.get('/', function (req, res) {
  //return index.html
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
    //asign id with uniqid
})
 
app.listen(3000)

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});