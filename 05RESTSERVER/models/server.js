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
        this.app.get('/api',(req,res)=>{
            res.json({
                ok:true,
                msg:"Get Api"
            })
        })
        this.app.put('/api',(req,res)=>{
            res.json({
                ok:true,
                msg:"put Api"
            })
        })
        this.app.post('/api',(req,res)=>{
            res.json({
                ok:true,
                msg:"post Api"
            })
        })
        this.app.delete('/api',(req,res)=>{
            res.json({
                ok:true,
                msg:"delete Api"
            })
        })
    }

    listen(){
        this.app.listen(this.port,()=>console.log('el sevidor esta corriendo en el puerto ',this.port));
    }
}

module.exports = Server;