
const {llaveCrearArchivo} = require('./helpers/multiplicar')

console.clear()
const base = 8;

llaveCrearArchivo(base)
    .then(function (nombreArchivo) {
        console.log(nombreArchivo + " Creado");
    })
    .catch(function(error){
        console.log(error);
    })