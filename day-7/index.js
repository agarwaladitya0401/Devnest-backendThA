const express = require('express');

const app = express();

// CRUD -> create , read, update, delete

app.get('/', (req, res) => {
    res.sendStatus(201).send("hello");
    // res.sendStatus(500).send("hello");
    // res.sendStatus(201);
    // res.json([1, 2, 3, 4, 5]);
});

app.get('/products', (req, res) => {
    res.send(req.query);
});

app.get('/ab?cd', (req, res) => {
    res.send(req.query);
});

app.get('/ab+cd', (req, res) => {
    res.send(req.query);
});

app.get('/*fly$/', (req, res) => {
    res.send(req.query);
});


app.get('/user/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
});

app.listen(5000);