// 1) Importar sistema de modulon ECMAScript  
import express from 'express';

// 02) declaracion de variables
const app = express();
const puerto = 8080;


// 03) declarar nuestra ruta
app.get('/',function(solicitud, respuesta){
    respuesta.status(200).json({
        msg:'Mi primera funcion'
    })
});
// 04) Indicar puerto donde esta funcionando el servidor
app.listen(puerto,function(){
    console.log('El servidor esta funcionando en el server '+ puerto);
})
