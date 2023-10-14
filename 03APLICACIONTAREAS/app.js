

//const {  inquirerMenu, pausa } = require('./helpers/inquirer2.js').default;
import fn from './helpers/inquirer2.js';
import 'colors';
//import { inquirerMenu, pausa } from './helpers/mensajes.js';


console.clear()

const main = async function(){
    console.log("Hola Mundo");
    let opt="";
    do{
        opt = await fn.inquirerMenu();
        console.log({opt});
        if(opt !== "0") await fn.pausa();
    }while(opt !== "0");
    
}

main()
    .then(function(){

    })
    .catch(function(){

    })

