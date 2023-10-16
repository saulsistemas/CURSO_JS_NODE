const { Schema,model, models } = require("mongoose");

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatorio'],
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type:Boolean,
        dafault:true,
    },
    google:{
        type:Boolean,
        dafault:false,
    }
});

module.exports = model('User',UsuarioSchema);