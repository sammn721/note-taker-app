const fs = require('fs');
const util = require('util');
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

const readFromFile = util.promisify(fs.readFile);
/**
 * @param {string} destination
 * @param {object} content
 * @returns {void}
 */
const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
err ? console.error(err) : console.info(`\nData written to ${destination}`)
);
/**
 * @param {object} content
 * @param {string} file
 * @returns {void}
 */
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
    }
    });
};
app.get('/notes', (req, res) =>
    // return notes.html
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    res.readFromFile('/db/db.json').then((data) => res.json(JSON.parse(data)))
);

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