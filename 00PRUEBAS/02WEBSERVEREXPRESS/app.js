// 1) Importar sistema de modulon ECMAScript  
import express from 'express';
import cors from 'cors';

// 02) declaracion de variables
const app = express();
const puerto = 8080;
const patch = '/api/usuarios'

//05 Cargando Middleware
app.use(express.static('public')); //Indicar pagina por defecto
app.use(cors()); 
app.use(express.json()); // permite convertir lo datos que viene al backend a formato JSON


// 03) declarar nuestra ruta
app.get('/',function(solicitud, respuesta){
    respuesta.status(200).json({
        msg:'Mi primera funcion'
    })
});


app.get(patch,function(solicitud, respuesta){
    respuesta.status(200).json({
        msg:'Mostrar'
    })
});

app.post(patch,function(solicitud, respuesta){
    respuesta.status(200).json({
        msg:'guardar'
    })
});

app.put(patch+'/:id',function(solicitud, respuesta){
    solicitud
    respuesta.status(200).json({
        msg:'editar'
    })
});

app.delete(patch+'/:id',function(solicitud, respuesta){
    respuesta.status(200).json({
        msg:'eliminar'
    })
});





// 04) Indicar puerto donde esta funcionando el servidor
app.listen(puerto,function(){
    console.log('El servidor esta funcionando en el server '+ puerto);
})
