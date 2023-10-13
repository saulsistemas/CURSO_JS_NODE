const fs = require('fs');
const colors = require('colors');
const crearArchivo = async function(base = 5, listar = false, hasta = 10){

    try {
        console.log("==================");
        console.log("   TABLA DEL "+base);
        console.log("==================");
        let salida = ""
        let consola = '';

        for (let index = 0; index < hasta; index++) {
            salida  += base +" x "+index+" = "+base*index +"\n";
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }
        console.log(consola);
        if ( listar ) {
            console.log('===================='.green);
            console.log('   Tabla del:'.green, colors.blue( base ) );
            console.log('===================='.green);

            console.log(consola);
        }
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