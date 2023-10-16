const { response,request } = require("express")
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/user');
const { validationResult } = require("express-validator");
const usuarioGet = (req = request,res = response)=>{
   // const query = req.query;
   //desestructuracion
    const {q,nombre='No name',apike,page=1,limit} = req.query;
    res.json({
        ok:true,
        msg:"Controlador - Get Api",
        //query,
        q,nombre,apike,page,limit
    })
}
const usuarioPost=async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});

    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo:correo});
    if(existeEmail){
        return res.status(400).json({
            msg:"Ese correo ya esta resgistrado"
        })
    }
    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);
    //guardar en BD
    await usuario.save();
    //desustructurar
    //const {nombre,edad} = req.body;
    res.json({
        ok:true,
        msg:"Controlador - post ",
        //body,
        usuario
    })
}
const usuarioPut= (req,res)=>{
    const id = req.params.id;
    res.json({
        ok:true,
        msg:"Controlador - put Api",
        id
    })
}
const usuarioPatch= (req,res)=>{
    res.status(500).json({
        ok:true,
        msg:"Controlador - patch Api"
    })
}
const usuarioDelete=(req,res)=>{
    res.json({
        ok:true,
        msg:"Controlador - delete Api"
    })
}
module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}