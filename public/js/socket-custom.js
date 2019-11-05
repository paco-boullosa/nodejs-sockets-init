var socket = io();

// --------------------------------------------
// .on  ==> para recibir (escuhar) información
// --------------------------------------------
socket.on('connect', function() {
    console.log('Conectado al servicor');
})
socket.on('disconnect', function() {
    console.log('Perdida la comunicación con el servidor');
})
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
})

// --------------------------------------------
// .emit ==> para emitir (enviar) información
// --------------------------------------------
socket.emit('enviarMensaje', {
    //usuario: 'Fran',
    usuario: 'Pepe',
    mensaje: 'Hola caracola'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});