const { response,request } = require("express")

const login = (req,res=response)=>{
    res.json({
        msg:'todo ok'
    })
}

module.exports ={
    login
}