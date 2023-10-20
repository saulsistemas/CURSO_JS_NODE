const { response,request } = require("express")
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/user');

const usuarioGet = async(req = request,res = response)=>{
   // const query = req.query;
   //desestructuracion
    //const {q,nombre='No name',apike,page=1,limit} = req.query;
    const {limite =5,desde=0} = req.query;

    //-ATERIORES PROMESAS
    //const usuarios = await Usuario.find({estado: true})
    //    .skip(Number(desde))
    //    .limit(Number(limite))
    //const total = await Usuario.countDocuments({estado: true});
    //-FIN ATERIORES PROMESAS


    const [total,usuarios] = await Promise.all([
        Usuario.countDocuments({estado: true}),
        await Usuario.find({estado: true})
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
    res.json({

        total,
        usuarios,
    })
}
const usuarioPost=async (req,res=response)=>{

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
const usuarioDelete=async (req,res)=>{
    const {id} =req.params;
    //const uid = req.uid;
    //Fisicamente lo borramos
    //const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id,{estado: false})

    const usuarioAutentificado =req.usuario;
    //console.log(usuarioAutentificado);
    res.json({
        usuario,
        //usuarioAutentificado,
       
    })
}
module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}