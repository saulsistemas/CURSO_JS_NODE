const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);


        this.paths ={};
        
        //Middlewares - Funciones que van añadirle otra funcionalidad (funcion que siempre se va ejecutar al levantar el servidor)
        this.middlewares();

        //rutas
        this.router();

        //Sockets
        this.sockets()
    }

  

    middlewares(){
        //cors - proteger nuestro servidor
        this.app.use(cors())

        //Directorio  publico
        this.app.use(express.static('public'))
    }
    router(){
        //this.app.use(this.authPath, require('../routes/auth.router'));
    }

    sockets(){
        this.io.on('connection', (socket) => { 
            console.log('socket io conectado', socket.id);   
            
            socket.on('disconnect', ()=>{
                console.log('socket io desconectado',socket.id);
            })
        });
        
    }

    listen(){
        this.server.listen(this.port,()=>console.log('el sevidor esta corriendo en el puerto ',this.port));
    }
}

module.exports = Server;