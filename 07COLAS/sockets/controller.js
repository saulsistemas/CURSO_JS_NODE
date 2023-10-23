const TicketControl = require("../models/ticket-control");

const ticketControl = new TicketControl();


const socketController = (socket) => { 
    console.log('socket io conectado', socket.id);   
    
    socket.emit('ultimo-ticket',ticketControl.ultimo)
    socket.emit('estado-actual',ticketControl.ultimo4)

    socket.on('siguiente-ticket',(payload,callback)=>{
        //console.log(payload);
        
        const siguiente = ticketControl.siguiente();
        callback(siguiente);

        //TODO: Notofocar que hay un ticket pendiente
    })

    socket.on('atender-ticket',( { escritorio } ,callback)=>{

        //console.log(escritorio);
        if (!escritorio) {
            return callback({
                ok:false,
                msg: 'El escritorio es obligatorio'
            })
        }
        const ticket = ticketControl.atenderTicket(escritorio);
        socket.broadcast.emit('estado-actual',ticketControl.ultimo4)
        if (!ticket) {
            callback({
                ok:false,
                msg: 'Ya no hay tickets pendientes'
            })
        }else{
            callback({
                ok:true,
                ticket
            })
        }        
    })

}

module.exports = {
    socketController
}