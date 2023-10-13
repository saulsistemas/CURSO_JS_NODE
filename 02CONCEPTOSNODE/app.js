
const {llaveCrearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');
require('colors');

console.clear()
//const base = 8;
//console.log(process.argv);

//const [,,arg3] = process.argv;
//const [,base= 12] = arg3.split("=")
//console.log(base);

//console.log(process.argv);
//console.log(argv);

llaveCrearArchivo(argv.b, argv.l, argv.h)
    .then(function (nombreArchivo) {
        console.log(nombreArchivo.rainbow + " Creado");
    })
    .catch(function(error){
        console.log(error);
    })