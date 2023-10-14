const { KeyMosntraMenu, pausa } = require('./helpers/mensajes');

require('colors');
console.clear()

const main = async function(){
    console.log("Hola Mundo");
    let opt="";
    do{
        opt = await KeyMosntraMenu();
        console.log({opt});
        if(opt !== "0") await pausa();
    }while(opt !== "0");
    
}

main()
    .then(function(){

    })
    .catch(function(){

    })


