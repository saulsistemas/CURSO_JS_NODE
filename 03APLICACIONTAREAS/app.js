//const { inquirerMenu } = require('./helpers/inquirer');
import { inquirerMenu }  from './helpers/inquirer';

//const {  KeyMosntraMenu, pausa } = require('./helpers/mensajes');
import 'colors';

console.clear()

const main = async function(){
    console.log("Hola Mundo");
    let opt="";
    do{
        opt = await inquirerMenu();
        console.log({opt});
        if(opt !== "0") await pausa();
    }while(opt !== "0");
    
}

main()
    .then(function(){

    })
    .catch(function(){

    })


