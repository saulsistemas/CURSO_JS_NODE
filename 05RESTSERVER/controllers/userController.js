const { response,request } = require("express")
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/user');

const usuarioGet = async(req = request,res = response)=>{
   // const query = req.query;
   //desestructuracion
    //const {q,nombre='No name',apike,page=1,limit} = req.query;
    const {limite =5,desde=0} = req.query;
    const usuarios = await Usuario.find()
        .skip(Number(desde))
        .limit(Number(limite))

    res.json({
        usuarios
    })
}
const usuarioPost=async (req,res)=>{

    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});


    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);
    //guardar en BD
    await usuario.save();
    //desustructurar
    //const {nombre,edad} = req.body;
    res.json({
        
        usuario
    })
}
const usuarioPut= async (req,res=response)=>{
    //const id = req.params.id;
    const {id} = req.params;
    const {_id,password,google,correo,...resto} = req.body;

    //todo validar contra BD
    if (password) {
        //encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto)

    res.json({
        ok:true,
        msg:"Controlador - put Api",
        id,
        usuario,
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