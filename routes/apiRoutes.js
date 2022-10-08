const fs = require('fs');
const app = require('express').Router();

app.get('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    res.json(results);
});

app.post('/notes', (req, res) => {
    data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    newNote = req.body;
    for (let i=0; i< data.length; i++) {
        newNote.id = i+2
    };

    data.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(data));

    res.json(data);
});

app.delete('/api/notes:id', (req, res) => {

});

module.exports = app;