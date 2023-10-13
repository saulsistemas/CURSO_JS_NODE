
const {llaveCrearArchivo} = require('./helpers/multiplicar')

console.clear()
//const base = 8;
//console.log(process.argv);

const [,,arg3] = process.argv;
const [,base= 12] = arg3.split("=")
//console.log(base);

llaveCrearArchivo(base)
    .then(function (nombreArchivo) {
        console.log(nombreArchivo + " Creado");
    })
    .catch(function(error){
        console.log(error);
    })