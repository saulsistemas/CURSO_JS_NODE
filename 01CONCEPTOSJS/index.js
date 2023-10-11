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

