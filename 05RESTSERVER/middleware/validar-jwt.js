const { response, request } = require("express")
const jwt = require('jsonwebtoken')
const validaJWT = (req=request, res = response, next)=>{

    const token = req.header('x-token');
    console.log(token);
    if (!token) {
        res.status(401).json({
            msg:'No hay token en la aplicacion'
        })
    }

    try {
        const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY)
        
        req.uid = uid;

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