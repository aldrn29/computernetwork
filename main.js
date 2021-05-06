var app = require('express')()
var http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/main.html')
})
io.on('connection', function(socket){
    console.log('a user connected')
    socket.on('chat message', function(msg){
        io.emit('chat message', msg)
        // console.log('message:' + msg)
    })
})
port = 12000
http.listen(port,function(){
    console.log('listening on *:', port)
})