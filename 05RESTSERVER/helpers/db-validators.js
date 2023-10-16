const Role = require('../models/rol');
const Usuario = require('../models/user');
const esRolValido = async(rol='') =>{
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error('El rol '+rol+' no esta registrado en la BD')
    }
}

const emailExiste = async(mail='')=>{
    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo:mail});
    if(existeEmail){
        throw new Error('El correo '+mail+' ya esta registrado en la BD')
    }
        
}
module.exports ={esRolValido,emailExiste}