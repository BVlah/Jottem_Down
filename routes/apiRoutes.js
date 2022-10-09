const { response } = require('express');
const fs = require('fs');
const app = require('express').Router();

app.get('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    res.json(results);
});

app.post('/notes', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    let newNote = req.body;

    const ids = data.map(object => {
        return object.id;
    });

    const maxId = Math.max(...ids);

    newNote.id = maxId + 1

    data.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(data));

    res.json(data);
});

app.delete('/notes/:id', (req, res) => {
    let noteId = req.params.id;
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    const newList = data.filter(note => note.id -1 !== noteId -1);

    fs.writeFileSync('./db/db.json', JSON.stringify(newList));
    
    res.json(newList);
});

module.exports = app;