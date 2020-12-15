const express = require('express')
const app = express()
const port = 3000
const http = require("http").createServer()


const io = require("socket.io")(http);

io.on("connection", (socket) => {
    socket.emit("welcome", "hello world")
})

http.listen(port, () => {
    console.log('server is listening to ' + port)
})

// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

// http.listen(3000, () => {
//     console.log('listening on *:3000');
// });