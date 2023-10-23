const empleadosBD = [
    {
        id:1,
        nombre:"Juan"
    },
    {
        id:2,
        nombre:"Carlos"
    },
    {
        id:3,
        nombre:"Miguel"
    },
]
const salarioBD = [
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:2000
    },
    
]

const getEmpleadoBI = function(id,callback){
    
    const empleado = empleadosBD.find(function(e) {
        //console.log(e.id,id);
        return e.id === id;
    })
    if (empleado) {
        //null es considerado como false
        callback(null,empleado)
    } else {
        callback('No Existe ' +id)
    }
}


const getSalarioBD= function(id,callback){
    //FUNCION DE FLECHA Y ENVIAR UN SOLO ELEMENTO
    const salarios = salarioBD.find(elemento => elemento.id === id)?.salario
    if (salarios) {
        callback(null, salarios);
    } else {
        callback("El Salario con ID: "+id+" No existe")
    }
} 
const idl =3
getEmpleadoBI(idl,function(error,empleado){
    if (error) {
        console.log('ERROR!');
        return console.log(error);
    }
    console.log("El empleado Existe");
    console.log(" ID "+empleado.id);
    console.log(" NOMBRE "+empleado.nombre);

    getSalarioBD(idl,function(err,sueldo){
        if (err) {
            return console.log(err);
        }
        //if (sueldo.id === undefined || sueldo.salario === undefined)  {
        //    console.log(sueldo);
        //}else{
            //console.log(" ID "+sueldo.id);
            //console.log(" SALARIO "+sueldo.salario);
            console.log(sueldo);
        //}
    });

});