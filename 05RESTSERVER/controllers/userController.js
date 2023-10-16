const { response,request } = require("express")

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