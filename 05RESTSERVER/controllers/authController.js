const { response,request } = require("express");
const Usuario = require("../models/user");
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");

const login = async(req,res=response)=>{
    const {correo,password}=req.body;
    try {
    //verificar si el correo existe
    const usuario = await Usuario.findOne({correo})
    if (!usuario) {
        return res.status(400).json({
            msg:'Usuario / password no son correctos -correo'
        })
    }
    //si el usuario esta activo
    if (!usuario.estado) {
        return res.status(400).json({
            msg:'Usuario / password no son correctos -Estado: False'
        })
    }
    //verificar la contraseña
    const validarPassword = bcryptjs.compareSync(password,usuario.password)
    if (!validarPassword) {
        return res.status(400).json({
            msg:'Usuario / password no son correctos -Password'
        })
    }
    //generar el JWT
    const token = await generarJWT(usuario.id)
        res.json({
            msg:'todo ok',
            usuario,
            token
            //correo,password
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Hable con el administrador'
        })
    }

}

const googleSignIn = async(req=request, res=response)=>{
    const {id_token} = req.body;
    res.json({
        msg:"todo bien",
        id_token
    })
}
module.exports ={
    login,
    googleSignIn
}