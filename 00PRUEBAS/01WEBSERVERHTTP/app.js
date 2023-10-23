// Importar sistema de modulon CommonJS 
//const http = require('http');

// 1) Importar sistema de modulon ECMAScript  
import htpp from 'http';
const port = 8080;

// 02) Crear el servidor
htpp.createServer(function(solicitud,respuesta){
    //04) Contenido de solicitudes y respuestas

    //# Solicitud (request) lo que esta solicitando el cliente, solicita acceder algun recurso de mi servidor
    //# Respuesta (response) lo que vamos a responder cuando procesamos la solicitud

    respuesta.writeHead(200,{ 'Content-Type': 'application/json' })
    
    //Lo que voy a mostrar en el navegador mediante el metodo "write()"
    respuesta.write("Hola Mundo ")
    respuesta.write("")
    const persona ={
        nombre :"Juan",
        apellido: "Rojas"
    }
    respuesta.write(JSON.stringify(persona))
    
    //para indicarle a node que terminamos de escribir la respuesta se utiliza el metodo "end()"
    respuesta.end()

})// 03) Escuchar en el puerto
.listen(port,function(){
    console.log('servidor funcionando en el puerto '+port);
})
