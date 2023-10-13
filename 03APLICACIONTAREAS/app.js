const { KeyMosntraMenu, pausa } = require('./helpers/mensajes');

require('colors');

const main = async function(){
    console.clear()
    console.log("Hola Mundo");
    KeyMosntraMenu();
    pausa();
}

main()
    .then(function(){

    })
    .catch(function(){

    })


