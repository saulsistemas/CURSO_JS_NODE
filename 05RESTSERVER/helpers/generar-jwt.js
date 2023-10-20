const jwt = require('jsonwebtoken')

const generarJWT = (uid='')=>{
    return new Promise(function(resolve, reject){
        const payload ={uid};

        jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{
            expiresIn:'4h'
        },function(err,token){
            if (err) {
                console.log(err);
                reject('no se pudo generar el tocke')
            }else{
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}