

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
    const tareas = new Tareas()
    do{
        opt = await fn.inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await fn.leerImput("Descripcion: ")
                console.log(desc);
            break;
            case '2':
                console.log(tareas._listado);
            break;
            
        }
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

