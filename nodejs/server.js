var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//var redis = require('redis');

server.listen(8890);

io.on('connection', function(socket) {

    console.log("Socket connected");

    socket.on('chatMessage', function(data) {
        console.log("chatMessage received on server.");
        io.sockets.emit('chatMessage', data);
    });

    socket.on('disconnect', function() {
        console.log("Socket disconnected");
    });
    
});


