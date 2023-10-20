const { response, request } = require("express")
const jwt = require('jsonwebtoken')

const Usuario = require('../models/user')

const validaJWT = async(req=request, res = response, next)=>{

    const token = req.header('x-token');
    console.log(token);
    if (!token) {
        res.status(401).json({
            msg:'No hay token en la aplicacion'
        })
    }

    try {
        const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY)

        //leer el usuario al modelo que corresponde al ui
        //req.uid = uid;
        const usuario = await Usuario.findById(uid)
        
        if (!usuario) {
            return res.status(401).json({
                msg:'token no valido - usuario no existe en la bd'
            })
        }
        //verificar si el uid tiene estado en true
        if (!usuario.estado) {
            return res.status(401).json({
                msg:'token no valido - usuario con estado en false'
            })
        }

        req.usuario =  usuario

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:'Token no valido'
        })
    }

}

module.exports ={
    validaJWT
}