const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido pikin flauer'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        //client.emit('enviarMensaje', data); //  --> envia al cliente que emitió el mensaje
        client.broadcast.emit('enviarMensaje', data); //  --> envia a todos los clientes (excepto al emisor original)

        // if (mensaje.usuario == 'Fran') {
        //     callback({
        //         respuesta: 'Hola Fran'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Hey. Tú no eres Fran!!!'
        //     });
        // }

    });

});