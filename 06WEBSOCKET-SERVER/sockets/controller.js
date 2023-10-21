const socketController = (socket) => { 
    console.log('socket io conectado', socket.id);   
    
    socket.on('disconnect', ()=>{
        console.log('socket io desconectado',socket.id);
    })

    socket.on('enviar-mensaje',(payload,callback)=>{
        //console.log(payload);
        const id = 12445;
        callback(id)
        socket.broadcast.emit('enviar-mensaje',payload)
    })
}

module.exports = {
    socketController
}