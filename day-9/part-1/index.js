const express = require('express');
const app = express();

const pat = require('path');

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "jade");


app.use('/', (req, res) => {

    // res.sendFile(path.join(__dirname, "view/index.jade"));
    // res.download(path.join(__dirname, "view/index.jade"), "hello.jade");

    res.render('index', { title: express });

    // res
    //     .status(201)
    //     .cookie("token", "test", {
    //         expire: new Date(Date.now + 8 * 3600000) ;
    //     })
    // cookie("hello", "hello")
    //     .redirect(301, "/admin")

});

app.listen(5000);