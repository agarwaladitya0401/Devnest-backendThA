const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send('hello');
// });

app.use(express.urlencoded({ extended: true }));

const checkAdmin = (req, res, next) => {

    if (req.query.id === "aditya") {
        next();

    }
    else {
        res.status(401).send("not authorized");

    }
};

app.use(checkAdmin);

const resSend = (req, res) => {
    res.status(200);
    res.send(req.query);
}

app.get('/', checkAdmin, resSend);

app.post('/', (res, req) => {
    console.log(req.body);
    res.json(req.body);

})

app.listen(5000);
