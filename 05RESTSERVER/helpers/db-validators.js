const Role = require('../models/rol');
const esRolValido = async(rol='') =>{
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error('El rol '+rol+' no esta registrado en la BD')
    }
}

module.exports ={esRolValido}