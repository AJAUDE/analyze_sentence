// import express
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes')

const port = 3050

mongoose.connect("mongodb+srv://michaelajaude:zico@cluster0.pggh5ux.mongodb.net/gmcblogdb?retryWrites=true&w=majority")
    .then(() => {
    console.log('connected to database');
    const app = express();
    
    // use router
    // app.use('/', router);
    app.get('/posts', (req, res) => {
        res.send("welcome")
    })

 


    // lissten on port 3050
    app.listen(port, () => {
        console.log(`server runnung on port ${port}`);
    });
});