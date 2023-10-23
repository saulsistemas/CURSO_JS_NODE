const getEmpleadoBI3= function(id){
    //FUNCION DE FLECHA Y ENVIAR UN SOLO ELEMENTO
    return new Promise(function(resuelto, rechazado){
        const empleados = empleadosBD.find(elemento => elemento.id === id)?.nombre;
        (empleados)
        ? resuelto(empleados)
        : rechazado('no exite el usuario de la promesa '+ id)
    })
} 
const getSalarioBD3= function(id){
    //FUNCION DE FLECHA Y ENVIAR UN SOLO ELEMENTO
    return new Promise(function(resuelto, rechazado){
        const salario = salarioBD.find(elemento => elemento.id === id)?.salario;
        (salario)
        ? resuelto(salario)
        : rechazado('no exite el salario de la promesa '+ id)
    })
} 


//ASYNC TRANSFORMA UNA FUNCION ASINCRONA PARA REGRESAR UNA PROMESA
const getInfoUsuarios = async function(id) {
    try {
        const empleado = await getEmpleadoBI3(id);
        const salario = await getSalarioBD3(id);
        return "El empleado es: "+empleado+ " y su salario: "+salario ;
    } catch (error) {
        return error;
    }
}

getInfoUsuarios(3)
    .then(function(empleado){
        console.log("WAIT "+empleado);
    })
    .catch(err => console.log(err))//solo se utiliza un catch para todo los errores
