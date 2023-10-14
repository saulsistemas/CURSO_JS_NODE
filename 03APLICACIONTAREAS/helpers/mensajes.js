require('colors');

const mosntraMenu = function () {
    return new Promise(function(resolve, reject){
        console.clear();
        console.log("==========================".green);
        console.log("   Seleccione una opción".green);
        console.log("==========================\n".green);
    
        console.log("1.".green+" Crear tarea");
        console.log("2.".green+" Listar tareas");
        console.log("3.".green+" Listar tareas completadas");
        console.log("4.".green+" Listar tareas pendientes");
        console.log("5.".green+" Completar tarea");
        console.log("6.".green+" Borrar tarea");
        console.log("0.".green+" Salir\n");
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question("Selecione una opcion: ",function(opt){
            readline.close();
            resolve(opt);
        })
    });

}

const pausa = function(){
    return new Promise(resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question("\nPresione"+" ENTER".green+" para continuar: ",function(opt){
            readline.close();
            resolve();
        })
    })

}

module.exports = {
    KeyMosntraMenu:mosntraMenu,
    pausa, //si la clave va ser igual que el valor, podemos simplificar a solo enviar la clave
}