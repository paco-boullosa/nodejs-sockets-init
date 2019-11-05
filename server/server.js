const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const path = require('path');

const app = express();
let server = http.createServer(app); // de esta manera se crea el servidor con toda la funcionalidad de express


const port = process.env.PORT || 3000;

// habilitar la carpeta /public
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));



// IO = esta es la comunicación del backend
// let io = socketIO(server);     -> en lugar de asi se hace como abajo para poder llevar la logica de las comunicaciones a otro fichero (server/sockets/socket.js)
// por lo tanto nos hacen falta 2 instrucciones: exportar el objeto io e importar el js donde está la lógica
module.exports.io = socketIO(server);
require('./sockets/socket');



// en lugar de app.listen(...
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});