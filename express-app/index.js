const express = require('express');
// create instance of express app
const app = express();
//  port to listen on

const PORT = 5000;


app.get('/', (request, response) => {
    response.send('hello world');
});

app.get('/about', (request, response) => {
    response.send('about me michael ajaude');
});

app.get('/carier', (request, response) => {
    response.send('am a web developer');
});



// listen to server on port 5000
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});

