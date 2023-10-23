//es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa 
//para completar algún tipo de rutina o acción.

function miFuncionCallback() {
    console.log("Hola esta funcion va para el callback");
}
function resultadoDeCallback(var1,funcionCallback) {
    funcionCallback();
}
resultadoDeCallback(1,miFuncionCallback)

function funcionOperaciones(v1,v2,resta,multiplicar) {
    let restaResult = v1-v2
    let multiResult = v1*v2
    resta("Callback "+restaResult)
    multiplicar("Callback "+multiResult)
}

funcionOperaciones(4,2,function(dato) {
        console.log("La resta es  "+dato);
    },
    function (dato) {
        console.log("La multiplicacion es  "+dato);
    }
)

funcionOperaciones(
    4,2,(dato) =>console.log("La resta es  "+dato), (dato)=>console.log("La multiplicacion es  "+dato)
)
