const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('root')
});

app.get('/notes', (req, res) => {
    res.send('notes')
});

app.get('/api/notes', (req, res) => {
    res.send('api notes')
});

app.post('/api/notes', (req, res) => {
    res.send('posted')
})

app.get('*', (req, res) => {
    res.send('all')
});

app.listen(PORT, () => {
    console.log(`App listening on PORT http://localhost:${PORT}`);
});

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const newNote = {
//     "title":"A new note",
//     "text":"Testing text"
// };

// // fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
// //     const notes = JSON.parse(data);
// //     const notesJSON = JSON.stringify(notes);
// // });
 
// app.get('/', function (req, res) {
//   //return index.html
// });

// app.get('/notes', function (req, res) {
//     //return notes.html
// });

// app.get('/api/notes', function (req, res) {
//     fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
//         const notes = JSON.parse(data);
//         const notesJSON = JSON.stringify(notes);
//     });
// });

// app.post('/api/notes', function (req, res)  {
//     //receive new note to save on request body
//     //add note to db.json files
    
//     //return new note
//     //asign id with uniqid
// });