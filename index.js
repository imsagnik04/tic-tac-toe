const express = require('express');
const app = express();
const server = require('http').Server(app);

const shortid = require('shortid');

const roomid = shortid.generate();
console.log(roomid);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});


server.listen(5000);