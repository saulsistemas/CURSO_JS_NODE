const path = require('path');
const fs = require('fs');

class Ticket{
    constructor(numero,escritorio){
        this.numero = numero;
        this.escritorio = this.escritorio;
    }
}

class TicketControl{
    constructor(){
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];
        this.ultimo4 = [];
        this.init();
    }

    get toJson(){
        return {
            ultimo:this.ultimo,
            hoy:this.hoy,
            tickets:this.tickets,
            ultimo4:this.ultimo4,
        }
    }

    init(){
        const {hoy,tickets,ultimo,ultimo4} = require ('../db/data.json');
        //console.log(this.hoy);
        if (hoy ===this.hoy) {

            this.tickets = tickets;
            this.ultimo = ultimo;
            this.ultimo4 = ultimo4;

        }else{

            this.guardarDB();
        }
    }
    guardarDB(){

        const dbPath = path.join(__dirname, '../db/data.json');
        fs.writeFileSync(dbPath, JSON.stringify( this.toJson));
    }

    siguiente(){
        this.ultimo +=1;
        const ticket = new Ticket(this.ultimo,null);
        this.tickets.push(ticket);

        this.guardarDB();
        return 'Ticket '+ ticket.numero;
    }

    atenderTicket(escritorio){
        //no tenemos ticket

        if (this.tickets.length ===0) {
            return null;
        }

        const ticket = this.tickets.shift()//this.tickets[0];
        ticket.escritorio = escritorio;

        this.ultimo4.unshift( ticket) //agrega arreglo a la primera fila

        if (this.ultimo4.length >4) {
            this.ultimo4.splice(-1,1);
        }

        this.guardarDB();

        return ticket;
    }
}

module.exports=TicketControl