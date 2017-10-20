const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Emina',
        role: 'Ljubav',
        age: 33
    }, {
        name: 'Faris',
        role: 'Son',
        age: 17
    }, {
        name: 'Sasa',
        role: 'Father',
        age: 38
    }]);
});

app.listen(3000);


module.exports.app = app;
