const socketIO = require('socket.io');
const socket = {};
//necesitamos este objeto porque es como un puntero, si hay un cambio lo ven todos

function connect(server){
    socket.io = socketIO(server);
}
//esta archivo es como nuestro routes 
//const io = require('socket.io')(server); esta haciendo lo mismo que esto en el server
//es simplemente para conectar socket io 


module.exports = {
    connect,
    socket,
}