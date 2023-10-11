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