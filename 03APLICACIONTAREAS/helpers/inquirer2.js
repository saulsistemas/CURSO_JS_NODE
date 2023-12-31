import inquirer from 'inquirer';
import 'colors';

//import 'colors';
const preguntas = [
{
    type:'list',
    name: 'opcion',
    message:'¿ Qué desea hacer ?',
    choices:[
        {value:'1', name:'1. Crear tarea'},
        {value:'2', name:'2. Listar tareas'},
        {value:'3', name:'3. Listar tareas completadas'},
        {value:'4', name:'4. Listar tareas pendientes'},
        {value:'5', name:'5. Completar tarea'},
        {value:'6', name:'6. Borrar tarea'},
        {value:'0', name:'0. Salir'},
    ]
}];
const inquirerMenu = async function(){
    console.clear();
    console.log("==========================".green);
    console.log("   Seleccione una opción".green);
    console.log("==========================\n".green);

    const {opcion} = await inquirer.prompt(preguntas)
    return opcion;
}

const pausa = async function(){
    const question =[{
        type:'input',
        name:'enter',
        message:"Presione"+" ENTER".green+" para continuar: ",
    }];
    await inquirer.prompt(question);
}

const leerImput = async (mensaje)=>{
    const question =[{
        type:'input',
        name:'desc',
        message:mensaje,
        validate(value){
            if (value.length===0) {
                return ' Por favor ingrese un valor'
            } else {
                return true;
            }
        }
    }];

    const {desc} = await inquirer.prompt(question)
    return desc;
}

export default  {
    inquirerMenu,
    pausa,
    leerImput
}
//export default inquirerMenu;

