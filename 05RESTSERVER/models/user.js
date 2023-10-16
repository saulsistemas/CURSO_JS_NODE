const { Schema,model, models } = require("mongoose");

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        require:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        require:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        require:[true,'La contraseña es obligatorio'],
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        require:true,
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