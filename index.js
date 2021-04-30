const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// // 이벤트 발생
// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('chat message', (msg) => {
//     io.emit('chat message', msg);
//   });
//   socket.on('disconnect', () => {
//   console.log('user disconnected');
//   });
// });
const port = 12000
http.listen(port, () => {
  console.log('Connected at', port);
  console.log()
});