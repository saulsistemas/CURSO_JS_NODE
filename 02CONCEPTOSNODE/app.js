const fs = require('fs');

console.clear()
const base = 5;
console.log("==================");
console.log("   TABLA DEL "+base);
console.log("==================");
let salida = ""
for (let index = 0; index < 10; index++) {
    salida+= base +" x "+index+" = "+base*index +"\n";
}
console.log(salida);

fs.writeFile('tabla-'+base+'.txt',salida,function(error){
    if(error) throw error;
    console.log('tabla-'+base+'.txt creado');
})