const fs = require('fs');
const crearArchivo = async function(base = 5){

    try {
        console.log("==================");
        console.log("   TABLA DEL "+base);
        console.log("==================");
        let salida = ""
    
        for (let index = 0; index < 10; index++) {
            salida+= base +" x "+index+" = "+base*index +"\n";
        }
        console.log(salida);
        //
        //fs.writeFile('tabla-'+base+'.txt',salida,function(error){
        //    if(error) throw error;
        //    console.log('tabla-'+base+'.txt creado');
        //})
    
        fs.writeFileSync('tabla-'+base+'.txt',salida)
        return 'tabla-'+base+'.txt creado';
    } catch (error) {
        return error;
    }

}

module.exports ={
    llaveCrearArchivo : crearArchivo,
}