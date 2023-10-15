const express = require('express');
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        
        //Middlewares - Funciones que van añadirle otra funcionalidad (funcion que siempre se va ejecutar al levantar el servidor)
        this.middlewares();

        //rutas
        this.router();
    }
    middlewares(){
        //Directorio  publico
        this.app.use(express.static('public'))
    }
    router(){
        this.app.get('/',(req,res)=>{
            res.send("Hola mundo xd")
        })
    }

    listen(){
        this.app.listen(this.port,()=>console.log('el sevidor esta corriendo en el puerto ',this.port));
    }
}

module.exports = Server;