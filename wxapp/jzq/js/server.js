const SocketIO = require('./libs/socket.io.slim.js')

function createRoom(cb) {
  go.server.socket.emit('create room', cb)
}
function joinRoom() {}
function leaveRoom() {}
function ready() {}
function placePiece() {}
function initSocket() {}

module.exports = {
  socket: null,
  createRoom,
  joinRoom,
  leaveRoom,
  ready,
  placePiece,
  initSocket
}