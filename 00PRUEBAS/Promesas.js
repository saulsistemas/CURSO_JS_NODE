//sirve para trabajar peticiones asincronas, asimismo, es utilizado para poder disminuir el uso de callbacks
let miPromesa = new Promise(function(resuelto, rechazado){
    let expresion = true;
    if (expresion) {
        resuelto('Resolvio correcto')
    }else{
        rechazado('se produjo un error')
    }
})

miPromesa.then(function(valor) {
    console.log(valor);
},function(error){
    console.log(error);
});




let miPromesa3 = new Promise(function(resuelto,rechazado){
    console.log("incio de promesa2");
    let opcion = false;
    
    if(opcion){
      setTimeout(function(){
          resuelto("saludos, esta es una promesa mas setTimeout2 7 segundos")
      },7000)
    }else{
        rechazado("hay error")
    }

})
miPromesa3.then(function(valor){
    console.log(valor);
}).catch(function(error){
  console.log(error)
})