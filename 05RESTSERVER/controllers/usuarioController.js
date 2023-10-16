const { response } = require("express")

const usuarioGet = (req,res = response)=>{
    res.json({
        ok:true,
        msg:"Controlador - Get Api"
    })
}
const usuarioPost=(req,res)=>{
    //const body = req.body;
    //desustructurar
    const {nombre,edad} = req.body;
    res.json({
        ok:true,
        msg:"Controlador - post ",
        //body,
        nombre,
        edad
    })
}
const usuarioPut= (req,res)=>{
    res.status(500).json({
        ok:true,
        msg:"Controlador - put Api"
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