require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
app.get('/',(req,res)=>{
    res.send("Hola mundo xd")
})

app.listen(port,()=>console.log('el sevidor esta corriendo en el puerto ',port));