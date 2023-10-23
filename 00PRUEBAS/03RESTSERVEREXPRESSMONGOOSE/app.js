// 1) Importar sistema de modulon ECMAScript  
import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';

// 02) declaracion de variables
const app = express();
const puerto = process.env.PORT;
const patch = '/api/usuarios'

//05) Cargando Middleware
app.use(express.static('public')); //Indicar pagina por defecto
app.use(cors()); 
app.use(express.json()); // permite convertir lo datos que viene al backend a formato JSON

// 06) Conexion a la base de datos 
async function conexion() {
    await mongoose.connect(process.env.MONGO_DB_CNN);
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
conexion().then(()=>(console.log('la conexion fue exitosa'))).catch(err => console.log(err));

// 07)CREANDO ESQUEMA

const UsuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    apellido:{
        type:String,
        required:[true,'El correo es obligatorio'],
    },
    edad:{
        type:Number,
    }
})
const Usuario = mongoose.model('Usuario',UsuarioSchema)

// 03) declarar nuestra ruta
app.get('/',function(solicitud, respuesta){
    respuesta.status(200).json({
        msg:'Mi primera funcion'
    })
});


app.get(patch,async function(solicitud, respuesta){
    //const query = solicitud.query
    const usuario =  await Usuario.find();
    //console.log(usuario);
    respuesta.status(200).json({
        msg:'Mostrar',
        usuario
    })
});

app.post(patch,function(solicitud, respuesta){

    //console.log('Lo que se envia por las cajas text ',solicitud.body);
    // 8) Grabando registros
    const params = solicitud.body;
    var usuario = new Usuario()

    usuario.nombre      = params.nombre;
    usuario.apellido    = params.apellido;
    usuario.edad        = params.edad;

    usuario.save();

    respuesta.status(200).json({
        msg:'guardar',
        usuario
    })
});

app.put(patch+'/:id',function(solicitud, respuesta){
    console.log('lo que se envia por la url como parametro ID ',solicitud.params);
    console.log('lo que se envia por la url como parametro concatenado ?nombre=prueba ',solicitud.query);

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
