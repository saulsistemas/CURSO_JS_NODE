const { response,request } = require("express")
const Usuario = require('../models/user')
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
    const body = req.body;
    const usuario = new Usuario(body);

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