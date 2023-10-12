//-------------VARIABLE-------------
//Una variable es un contenedor para un valor, 
//como un número que podríamos usar en una suma, 
//o una cadena que podríamos usar como parte de una oración. 

//-------------TIPOS DE DATOS-------------
console.log("==================== 1 - TIPOS DE DATOS ==================== ");
console.log("-------------NÚMERICO------------- ");
var tipoDatoNumerico = 15
console.log("Tipo de dato númerico "+ tipoDatoNumerico);
console.log(typeof(tipoDatoNumerico));
console.log("-------------STRING------------- ");
var tipoDatoString = "HelpNet"
console.log("Tipo de dato cadena "+tipoDatoString);
console.log(typeof(tipoDatoString));
console.log("-------------BOOLEANOS------------- ");
var tipoDatoBooleano = true
console.log("Tipo de dato booleano "+tipoDatoBooleano);
console.log(typeof(tipoDatoBooleano));
console.log("-------------ARRAY------------- ");
var tipoDatoArray = ["PHP","JAVA","JS"]
console.log("Tipo de dato array "+tipoDatoArray);
console.log("Tipo de dato array "+tipoDatoArray[2]);
console.log(typeof(tipoDatoArray));
console.log("-------------OBJETO------------- ");
var tipoDatoObjeto = {
    nombre: "Claudio",
    apellido:"Ronaldo",
    direcciones:{
                direccion1:"Lima",
                direccion2:"Chiclayo"
                },
    carreras:["Ingeniero","Contador"]

}
console.log("Tipo de dato cadena - Nombre: "+tipoDatoObjeto.nombre + ", Apellido: "+tipoDatoObjeto.apellido+ ", Dirección: "+tipoDatoObjeto.direcciones.direccion1+ ", Otra direccion: "+tipoDatoObjeto.direcciones["direccion2"]+ ", Carrera: "+tipoDatoObjeto.carreras[0]);
console.log(typeof(tipoDatoObjeto));
console.log("-------------FUNCION------------- ");
var tipoDatoFuncion = function miFuncion(){return true};
console.log("Tipo de dato Función "+tipoDatoFuncion);
console.log(typeof(tipoDatoFuncion));
console.log("-------------UNDEFINED------------- ");
var tipoDatoFundefined ;
console.log("Tipo de dato undefined "+tipoDatoFundefined);
console.log(typeof(tipoDatoFundefined));
console.log("-------------NULL------------- ");
var tipoDatoNull =null ;
console.log("Tipo de dato null "+tipoDatoNull);
console.log(typeof(tipoDatoNull));

console.log("-------------VAR LET CONS------------- ");
console.log("-------------VAR------------- ");
//Declara una variable, opcionalmente la inicia a un valor.
var varVariable = 15;
console.log("variable var "+varVariable);
var varVariable = 20;
console.log("variable var "+varVariable);

console.log("-------------LET------------- ");
//Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
let letVariable = 15;
console.log("variable let "+letVariable);
letVariable = 20;
console.log("variable let "+letVariable);
console.log("-------------CONST------------- ");
//Declara un nombre de constante de solo lectura y ámbito de bloque.
const constVariable = 15;
console.log("variable const "+constVariable);
//constVariable = 20;
//console.log("variable const "+constVariable);


console.log("==================== 2 - OPERADORES ==================== ");
console.log("==================== 2.1 - ARITMETICOS ==================== ");
let valor1 = 15
let valor2 = 10
console.log("-------------SUMA------------- ");
var sumaVariables = valor1 + valor2
console.log("la suma de "+ valor1 +" Y "+valor2+" = "+ sumaVariables);
console.log("-------------RESTA------------- ");
var restaVariables = valor1 - valor2
console.log("la resta de "+ valor1 +" Y "+valor2+" = "+ restaVariables);
console.log("-------------MULTIPLICACIÓN------------- ");
var multiplicacionVariables = valor1 * valor2
console.log("la multiplicación de "+ valor1 +" Y "+valor2+" = "+ multiplicacionVariables);
console.log("-------------DIVISIÓN------------- ");
var divisionVariables = valor1 / valor2
console.log("la división de "+ valor1 +" Y "+valor2+" = "+ divisionVariables);
console.log("-------------RESIDUO------------- ");
var residuoVariables = valor1 % valor2
console.log("El residuo de "+ valor1 +" Y "+valor2+" = "+ residuoVariables);
console.log("-------------EXPONENTE------------- ");
var exponenteVariables = valor1 ** valor2
console.log("El exponente de "+ valor1 +" elevado "+valor2+" = "+ exponenteVariables);
console.log("-------------PRE INCREMENTO------------- ");
var preIncrementoVariables = ++valor1 
console.log("Se incremento de 15 a "+valor1+" y se almacenó "+ preIncrementoVariables);
console.log("-------------POS INCREMENTO------------- ");
var posIncrementoVariables = valor2++ 
console.log("Se incremento de 10 a "+valor2+" y se almacenó "+ posIncrementoVariables);
console.log("-------------PRE DECREMENTO------------- ");
var preDecrementoVariables = --valor1 
console.log("Se incremento de 16 a "+valor1+" y se almacenó "+ preDecrementoVariables);
console.log("-------------POS DECREMENTO------------- ");
var posDecrementoVariables = valor2-- 
console.log("Se incremento de 10 a "+valor2+" y se almacenó "+ posDecrementoVariables);

console.log("==================== 2.2 - ASIGNACIÓN ==================== ");
var asignacionVariables = 15
console.log("la variable asignada "+asignacionVariables);
console.log("-------------ADICIÓN------------- ");
var adiciónVariables = 1
adiciónVariables+=3 // adiciónVariables = adiciónVariables + 3
console.log("la variable adición "+adiciónVariables);
console.log("-------------RESTA------------- ");
var restaVariables = 6
restaVariables-=3 // restaVariables = restaVariables - 3
console.log("la variable resta "+restaVariables);
/*
*= 
/=
%=
**=
*/

console.log("==================== 2.3 - COMPARACION ==================== ");
var variableComparacion1 = 2, variableComparacion2 = '2',  variableComparacion3 =3
console.log("-------------==------------- ");
var resultadoIgual = variableComparacion1 == variableComparacion2 // revisa el valor sin importar el tipo de dato
console.log("la variable "+variableComparacion1+" == "+variableComparacion2+" = "+resultadoIgual);
console.log("-------------===------------- ");
var resultadoEstrictamenteIgual = variableComparacion1 === variableComparacion2 // revisa el valor y el tipo de dato
console.log("la variable "+variableComparacion1+" === "+variableComparacion2+" = "+resultadoEstrictamenteIgual);
console.log("-------------!=------------- ");
var resultadoDiferente = variableComparacion1 != variableComparacion2 // revisa el valor sin importar el tipo de dato
console.log("la variable "+variableComparacion1+" != "+variableComparacion2+" = "+resultadoDiferente);
console.log("-------------!==------------- ");
var resultadoEstrictamenteDiferente = variableComparacion1 !== variableComparacion2 // revisa el valor y el tipo de dato
console.log("la variable "+variableComparacion1+" !== "+variableComparacion2+" = "+resultadoEstrictamenteDiferente);
console.log("-------------<= < ------------- ");
var resultadoMenorIgual = variableComparacion1 <= variableComparacion3 
var resultadoMenor = variableComparacion1 < variableComparacion3 
console.log("la variable "+variableComparacion1+" <= "+variableComparacion3+" = "+resultadoMenorIgual);
console.log("la variable "+variableComparacion1+" < "+variableComparacion3+" = "+resultadoMenor);
console.log("------------->= > ------------- ");
var resultadoMayorIgual = variableComparacion1 >= variableComparacion3 
var resultadoMayor = variableComparacion1 > variableComparacion3 
console.log("la variable "+variableComparacion1+" >= "+variableComparacion3+" = "+resultadoMayorIgual);
console.log("la variable "+variableComparacion1+" > "+variableComparacion3+" = "+resultadoMayor);

console.log("==================== 2.4 - LOGICOS ==================== ");
var variableLogica1 = 10, variableLogica2 =15
console.log("------------- && (AND)------------- ");
var resultadorAnd = variableLogica1 == 10 && variableLogica2 == 15
console.log("La variable es "+resultadorAnd);
console.log("------------- || (OR)------------- ");
var resultadorOr = variableLogica1 == 10 || variableLogica2 == 6
console.log("La variable es "+resultadorOr);
console.log("------------- ! (NOT)------------- ");
var resultadorOr = !(variableLogica1 == 10 || variableLogica2 == 6)
console.log("La variable es "+resultadorOr);

console.log("==================== 2.5 - TERNARIO ==================== ");
console.log("------------- condition ? val1 : val2------------- ");
var varibaleTernario = 7 % 2 ==0 ? 'Es PAR ': 'Es IMPAR'
console.log("El valor "+varibaleTernario);

console.log("==================== 3 - SENTENCIAS ==================== ");
console.log("==================== 3.1 - IF ==================== ");
var variableIF =1 ;

if (variableIF>10) {
    console.log("es mayor a 10");
    if(variableIF){
        console.log("ingresaste al primer if");
    }
} else if(variableIF==10){
    console.log("es igual 10");
}else{
    console.log("es menor a 10");
}

console.log("==================== 3.2 - SWITCH ==================== ");
var variableSwitch =3 ;
switch (variableSwitch) {
    case 1:
        console.log("el número es 1");
        break;
    case 2: case 3:
        console.log("el número es 2 o 3");
        break;
    default:
        console.log("es un número diferente");
        break;
}

console.log("==================== 4 - BUCLES ==================== ");
console.log("==================== 4.1 - WHILE ==================== ");
let contador = 0

while (contador<3) {
    console.log(contador);
    contador+=1
}
console.log("==================== 4.2 - DOWHILE ==================== ");
let contadorDo = 0

do{
    console.log(contadorDo);
    contadorDo++
}while(contadorDo< 3)

console.log("==================== 4.3 - FOR ==================== ");
for (let index = 0; index < 3; index++) {
    console.log(index);
}

console.log("==================== 4.4 - BREAK ==================== ");
for (let index = 0; index < 5; index++) {
    if (index == 2) {
        console.log("se rompió bucle en el número : " + index);
        break
    }
}
console.log("==================== 4.4 - CONTINUE ==================== ");
for (let index = 0; index < 5; index++) {
    if (index == 2) {
        console.log("El contador vale , continuemos : " + index);
        continue
    }
    console.log("se rompió bucle en el número : " + index);
}

console.log("==================== RECORRER AREGLOS ==================== ");
let variableArregloCursos= ["JS","PHP","JAVA","PYTHON"]
for (let index = 0; index < variableArregloCursos.length; index++) {
    const element = variableArregloCursos[index];
    console.log(index+"-> "+element);
}

console.log("==================== RECORRER AREGLOS CON FOREACH==================== ");
var arraysLenguajes = new Array("PHP", "JAVA","JS","C#")

arraysLenguajes.forEach((elemento,indice) => {
    console.log(indice+ " "+elemento);
});

arraysLenguajes.forEach(function(elemento,indice,arr){
    console.log(arr);
    console.log(indice+ " "+elemento);
});
console.log("==================== RECORRER AREGLOS CON FOR IN Y OF==================== ");
//For IN muestra los indices del array
//FOR OF muestra los elementos del array

    
    for (const indice in arraysLenguajes) {
        console.log(indice);
    }
    for (const indice in arraysLenguajes) {
        console.log(arraysLenguajes[indice]);
    }
    for (const elemento of arraysLenguajes) {
        console.log(elemento);
    }

console.log("==================== MODIFICAR AREGLOS ==================== ");
variableArregloCursos[1]='GO'
for (let index = 0; index < variableArregloCursos.length; index++) {
    const element = variableArregloCursos[index];
    console.log(index+"-> "+element);
}
console.log("==================== AGREGAR AREGLOS ==================== ");
variableArregloCursos.push('PHP')
for (let index = 0; index < variableArregloCursos.length; index++) {
    const element = variableArregloCursos[index];
    console.log(index+"-> "+element);
}
variableArregloCursos[6]='C#'
for (let index = 0; index < variableArregloCursos.length; index++) {
    const element = variableArregloCursos[index];
    console.log(index+"-> "+element);
}
console.log(Array.isArray(variableArregloCursos))

console.log("==================== BUSQUEDAS AREGLOS ==================== ");
var busquedaArreglo = variableArregloCursos.find(function(elemento){return elemento =="C#";})
console.log("Elemento encontado "+busquedaArreglo);
var busquedaArregl2 = variableArregloCursos.findIndex(elemento =>elemento =="C#")
console.log("Elemento encontado "+busquedaArregl2);

console.log("==================== FUNCIONES ==================== ");
//es un bloque de código o un conjunto de instrucciones que realiza una tarea específica
//parámetro, se usa a menudo para referirse a la variable en la declaración del método, mientras que argumento,  se refiere al valor que se envía
console.log("-------------CON ARGUMENTOS------------- ");
function miFuncion(parametro1, parametro2) {
    console.log("La suma es : "+(parametro1+parametro2));
}
miFuncion(2,1)
console.log("-------------CON RETORNO------------- ");
function miFuncionRetorno(parametro1, parametro2) {
    return parametro1+parametro2
}
console.log("La suma con return " + miFuncionRetorno(2,1));
console.log("-------------ANONIMA------------- ");
(function (a,b) {
    console.log("Esta es una funcion anonima, solo se llama una vez " + (a+b));
})(3,4);

console.log("-------------EN UNA VARIABLE------------- ");
var miFuncionVariable = function(a, b){return a+b}
var variableFuncion =miFuncionVariable(3,2)
console.log("La suma guardando funcion en variable "+ variableFuncion);

console.log("-------------FLECHA------------- ");
//no hay necesidad de colorcar return
const miFuncionFlecha = (a,b) => a+b;
var variableFuncionFlecha = miFuncionFlecha(5,4)
console.log("La funcion flecha retorna "+ variableFuncionFlecha);

console.log("-------------ARGUMENTS------------- ");
//la propiedad arguments es un arreglo que tienen las fucniones
const miFuncionArguments = function(a = 10,b =11){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a+b+arguments[2];
}
var variableFuncionArguments = miFuncionArguments(5,4,7)
console.log("La funcion flecha retorna "+ variableFuncionArguments);
console.log("-------------ARGUMENTS2 REST------------- ");
//la propiedad arguments es un arreglo que tienen las fucniones
//For IN muestra los indices del array
//FOR OF muestra los elementos del array
function restFuncion(...args) {
    
    for (const indice in args) {
        console.log(indice);
    }
    for (const indice in args) {
        console.log(args[indice]);
    }
    for (const elemento of args) {
        console.log(elemento);
    }
}
restFuncion("Miguel",2,3,4);
console.log("-------------ARGUMENTS2 SPREAD------------- ");
varibleSpread =["Carlos","Juan"]
function spreadFuncion(...args) {
    
    for (const indice in args) {
        console.log(indice);
    }
    for (const elemento of args) {
        console.log(elemento);
    }
}
restFuncion(varibleSpread,"Miguel",2,3,4);
console.log("-------------FLECHA 2------------- ");
//Llamadas tambien funcioens anonimas
//ANTES
let variableFuncionAnonima = function funcionAnonima(params) {
    return params;
}
console.log(variableFuncionAnonima("Hola Soy una funcion anonima"));
//AHORA
let variableFuncionFlecha2 = (params) => params;
console.log(variableFuncionFlecha2("Hola Soy una funcion flecha"));

//OTRAS FORMAS NUEVAS
let variableFuncionFlecha3 = params => params + params;
console.log(variableFuncionFlecha3(3));

let variableFuncionFlecha4 = () => console.log("Hola soy una funcion flecha sin parametros ");
variableFuncionFlecha4()

let variableFuncionFlecha5 = (params1,params2) => {
    return params1+params2
};
console.log(variableFuncionFlecha5(4,1));

console.log("-------------CALLBACK------------- ");
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


console.log("==================== OBJETOS ==================== ");
let variableObjeto ={
    nombre:'Juan',
    apellido: 'Ronaldo',
    edad:'29',
    datosCompletos: function(){
        return this.nombre + ' ' +this.apellido;
    }
}
console.log("Mis datos princiaples son : "+variableObjeto.datosCompletos() +" "+variableObjeto.edad);
console.log("-------------CLASE OBJECT------------- ");
let variableObjeto2 = new Object()
variableObjeto2.nombre = 'Carlos';
variableObjeto2.apellido = 'Rojas';
variableObjeto2.edad = '15';
console.log("Mis datos princiaples son : "+variableObjeto2.nombre +" "+variableObjeto2.apellido+" "+variableObjeto2['edad']);
console.log("-------------RECORRIENDO OBJETO------------- ");
for (const nombrePropiedad in variableObjeto) {
    console.log(nombrePropiedad +" => " + variableObjeto[nombrePropiedad]);
}
console.log("-------------AGREGANDO PROPIEDADES OBJETO------------- ");
variableObjeto.telefono = 123456;
for (const nombrePropiedad in variableObjeto) {
    console.log(nombrePropiedad +" => " + variableObjeto[nombrePropiedad]);
}
console.log("-------------ELIMINAR PROPIEDADES OBJETO------------- ");
delete variableObjeto.datosCompletos;
for (const nombrePropiedad in variableObjeto) {
    console.log(nombrePropiedad +" => " + variableObjeto[nombrePropiedad]);
}
console.log("-------------SEGUNDA MANERA DE RECORRER OBJETO------------- ");
// RETORNA UN ARRAY
let variableObjeto3 = Object.values(variableObjeto)
console.log(variableObjeto3);
// CONVIERTE NUESTRO OBJETO UNA CADENA
let variableObjeto4 = JSON.stringify(variableObjeto)
console.log(variableObjeto4);
// CONVIERTE CADENA DE OBJETO EN OBJETO
let variableObjeto5 = JSON.parse(variableObjeto4)
console.log(variableObjeto5);
// LOS OBJETOS PUEDEN TENET METODOS GET SET, PROTOTYPE, CALL, APPLY


console.log("==================== 5- CLASES ==================== ");
console.log("-------------CONSTRUCTOR, METODOS GET Y SET OBJETOS------------- ");
//Extiene de la clase Object = extends Object
class Persona{
    static contadorObjetoPersona=0;

    //atributo de objetos
    email = 'este es mi correo';
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetoPersona++;
        console.log('Se incremente '+ Persona.contadorObjetoPersona);
    }
    //Metodos get y set
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._apellido = nombre;
    }
    //Metodo
    nombreCompleto(){
        return this._nombre +" "+this._apellido
    }
    toString(){
        return this.nombreCompleto()
    }
    //Metodos estaticos, se asocia con una clase pero no con el objeto, no es posible llamarlo desde un objeto
    // Persona.saludar()
    static saludar(){
        console.log("Saludos desde el metodo static");
    }
    static saludar2(parametro){
        console.log("Saludos desde el metodo static + "+parametro);
    }
}
let persona1 = new Persona("Carlos","Ronaldo")
console.log(persona1);
persona1.setNombre="Miguel"
console.log(persona1.getNombre);
console.log(persona1);
console.log(persona1.nombreCompleto());

console.log("-------------HERENCIA, SOBREESCRITURA------------- ");
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    //Metodos get y set
    get geDepartamento(){
        return this._departamento;
    }
    set setDepartamento(departamento){
        this._departamento = departamento;
    }
    //SOBREESCRITURA de la clase padre (OBJECT)
    nombreCompleto(){
        //return this._nombre +" "+this._apellido+" " +this._departamento
        return super.nombreCompleto()+" " +this._departamento
    }
}

let empleado1 = new Empleado("Juan","Romario","sistemas")
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
console.log(empleado1.email);
console.log("-------------STATIC------------- ");
Persona.saludar()
Persona.saludar2("Clase Persona")
Empleado.saludar()
Empleado.saludar2("Clase Empleado")
console.log(Persona.contadorObjetoPersona);
console.log(Empleado.contadorObjetoPersona);

console.log("==================== 6- MANEJO ERRORES ==================== ");
console.log("-------------TRY CATCH FINALLY------------- ");
'use strict'
try {
    let x=10;
    
} catch (error) {
    console.log(error);
}finally{
    //siempre se va ejecutar
    console.log("termina la revision de errores");
}
console.log('Continuemos ...');
console.log("-------------THROW------------- ");
try {
    let x=10;
    //arrojar nuestros errores
    throw 'Mi error'
} catch (error) {
    console.log(error);
}finally{
    //siempre se va ejecutar
    console.log("termina la revision de errores");
}

console.log("==================== REPASO FUNCIONES FLECHAS Y CALLBACK ==================== ");

console.log("-------------FLECHA 2------------- ");
//Llamadas tambien funcioens anonimas
//ANTES
let variableFuncionAnonima11 = function funcionAnonima(params) {
    return params;
}
console.log(variableFuncionAnonima11("Hola Soy una funcion anonima"));
//AHORA
let variableFuncionFlecha21 = (params) => params;
console.log(variableFuncionFlecha21("Hola Soy una funcion flecha"));

//OTRAS FORMAS NUEVAS
let variableFuncionFlecha31 = params => params + params;
console.log(variableFuncionFlecha31(3));

let variableFuncionFlecha41 = () => console.log("Hola soy una funcion flecha sin parametros ");
variableFuncionFlecha41()

let variableFuncionFlecha51 = (params1,params2) => {
    return params1+params2
};
console.log(variableFuncionFlecha51(4,1));

console.log("-------------CALLBACK------------- ");
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

function miFuncionCallback() {
    console.log("Hola esta funcion va para el callback");
}
function resultadoDeCallback(var1,funcionCallback) {
    funcionCallback();
}
resultadoDeCallback(1,miFuncionCallback)

console.log("==================== 7 FUNCIONES SETTIMEOUT ==================== ");
//llamadas asincronas con uso de setTimeOut -> requiere como parametro un callback, segundos
//miFuncionCallback()
setTimeout(function(){
    console.log("Mi funcion se va ejecutar en 3 segundos  ")
},3000)
setTimeout(()=>console.log("Mi funcion se va ejecutar en 4 segundos  "),4000)

console.log("==================== 8 FUNCIONES SETINTERVAL ==================== ");
//sincrona - sincroniza segun los segundos -> requiere como parametro un callback, segundos

//setInterval(function() {
//    let fecha = new Date();
//    console.log(`${fecha.getHours}:${fecha.getMinutes}:${fecha.getSeconds}:`);
//},1000)

console.log("==================== 9 PROMESAS ==================== ");
//
let miPromesa = new Promise(function(resuelto, rechazado){
    let expresion = true;
    if (expresion) {
        resuelto('Resolvio correcto')
    }else{
        rechazado('se produjo un error')
    }
})
//primera forma
//miPromesa.then(valor=>console.log(valor),error=>console.log(error))
//seguna forma
//miPromesa.then(valor=>console.log(valor)).catch(error=>console.log(error))
miPromesa.then(function(valor) {
    console.log(valor);
},function(error){
    console.log(error);
});

console.log("----------------------- 9-1 PROMESAS  + SETTIMEOUT ----------------------- ");

//todo con funcion flecha, el "rechazado no" es obligatorio
let miPromesa2 = new Promise(resuelto =>{
    console.log("incio de promesa");
    setTimeout(()=>resuelto("saludos, esta es una promesa mas setTimeout 6 segundos"),6000)
})
miPromesa2.then(valor=>console.log(valor))

let miPromesa3 = new Promise(function(resuelto){
    console.log("incio de promesa2");
    setTimeout(function(){
        resuelto("saludos, esta es una promesa mas setTimeout2 7 segundos")
    },7000)
})
miPromesa3.then(function(valor){
    console.log(valor);
})

console.log("==================== 10 ASYNC ==================== ");
//SIMPLIFICA EL USO DE PROMESAS
//ASYNC INDICA QUE UNA FUNCION VA REGRESAR UNA PROMESA

async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}
//porque es una funcion hay que agregarle los parentesis
miFuncionConPromesa().then(function(valor){
    console.log(valor);
})

console.log("==================== 11 AWAIT ==================== ");
//espera el resultado de una promesa
//await solo se puede declarar dentro de una funcion declara con async
async function miFuncionConPromesaYAwait(){
    let promesa1 = new Promise(function(resuelto){
        resuelto('Promesa con Await ')
    })
    console.log(await promesa1);
}

miFuncionConPromesaYAwait();

async function miFuncionConPromesaYAwaitTimeout(){
    let promesa1 = new Promise(function(resuelto){
        setTimeout(function(){
            resuelto('Promesa con Await a los 9 segundos')
        },9000)
    })
    console.log(await promesa1);
}
miFuncionConPromesaYAwaitTimeout()

console.log("==================== 12 DESTRUCTURACION ==================== ");
console.log("-------------1DE UN OBJETO ------------- ");
const pokemon ={
    nombre:"Pikachu",
    tipo:"Electrico",
    poder:"impactrueno",
    getNombre:function(){
        return this.nombre + " "+this.tipo + " "+this.poder
    }
}
//console.log(pokemon.getNombre());
const{nombre,tipo,poder,edad=15}=pokemon
console.log("Destructuracion "+nombre,tipo,poder,edad);

console.log("-------------con funciones------------- ");

function imprimePokemon(pokemon) {
    const{nombre,tipo,poder,edad=15}=pokemon
    console.log("Destructuracion 2 "+nombre,tipo,poder,edad);
}
imprimePokemon(pokemon)

console.log("-------------con funciones 2------------- ");

function imprimePokemon2({nombre,tipo,poder,edad=15}) {
    console.log("Destructuracion 3 "+nombre,tipo,poder,edad);
}
imprimePokemon2(pokemon)

console.log("-------------2 DE UN ARRAY ------------- ");

const pokemones= ['pikachu','charmander','caterpie']
const[h1,h2,h3] = pokemones
//const[,,h3] = pokemones //si queremos el ultimo elemento de array
console.log("Destructuracion array "+h1,h2,h3);

console.log("-------------con funciones------------- ");

function imprimePokemonArray(pokemon) {
    const[h1,h2,h3] = pokemon
    console.log("Destructuracion array "+h1,h2,h3);
}
imprimePokemonArray(pokemones)