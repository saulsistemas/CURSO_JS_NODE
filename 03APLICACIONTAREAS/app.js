

//const {  inquirerMenu, pausa } = require('./helpers/inquirer2.js').default;
import fn from './helpers/inquirer2.js';
import 'colors';
import Tarea from './models/tarea.js';
import Tareas from './models/tareas.js';
//import { inquirerMenu, pausa } from './helpers/mensajes.js';


console.clear()

const main = async function(){

    console.log("Hola Mundo");
    let opt="";
    do{
        //opt = await fn.inquirerMenu();
        //console.log({opt});
        const tareas = new Tareas('compara comida')
        const tarea = new Tarea('compara comida')
        tareas._listado[tarea.id] = tarea;
        console.log(tareas);
        
        if(opt !== "0") await fn.pausa();
    }while(opt !== "0");
    
}

main()
    .then(function(){

    })
    .catch(function(){

    })

