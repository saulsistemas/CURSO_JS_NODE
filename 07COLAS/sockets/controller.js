const TicketControl = require("../models/ticket-control");

const ticketControl = new TicketControl();


const socketController = (socket) => { 
    console.log('socket io conectado', socket.id);   
    
    socket.emit('ultimo-ticket',ticketControl.ultimo)

    socket.on('siguiente-ticket',(payload,callback)=>{
        //console.log(payload);
        
        const siguiente = ticketControl.siguiente();
        callback(siguiente);

        //TODO: Notofocar que hay un ticket pendiente
    })
}

module.exports = {
    socketController
}