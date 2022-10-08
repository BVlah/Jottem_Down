const fs = require('fs');
const app = require('express').Router();

app.get('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    res.json(results);
});

app.post('/api/notes', (req, res) => {

});

app.delete('/api/notes:id', (req, res) => {

});

module.exports = app;