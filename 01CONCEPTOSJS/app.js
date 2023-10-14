
console.log("==================== 1 CODIGO SINCRONO==================== ");


/*********************************/
/*CONCEPTO#1 ==> CODIGO SINCRONO*/
/********************************/

//Tradicionalmente, JavaScript es single-threaded (de un solo hilo)
//thread(hilo ) --> proceso que la aplicacion puede usar para completar tareas)
//En JavaScript sincrono, las tareas se ejecutan en secuencia (1, 2, 3, 4, etc.)

//Ejemplo de JavaScript sincrono

//let numeroFinal = 0;
//for (let i = 0; i < 500000000; i++) {
//    numeroFinal += 5;
//}
//console.log(numeroFinal);
//document.body.style.background = 'red';
//console.log('ultima tarea');


console.log("==================== 2 CODIGO ASINCRONO==================== ");
/*********************************/
/*CONCEPTO#2 ==> CODIGO ASINCRONO*/
/*********************************/

//JavaScript asincrono nos permite ejecutar tareas simultaneamente
//Hay tres tecnicas para implementar JavaScript asincrono:

//a)async callbacks
//b)promises
//c)async await
console.log("====================  2-1 CALLBACK synchronous ==================== ");

/***************************/
/*CONCEPTO#3 ==> CALLBACKS*/
/**************************/

//callbacks son funciones que se pasan como argumento adentro de otras funciones
//y se invocan adentro de la funcion principal para completar alguna tarea

//A) synchronous callbacks (se ejecutan inmediatamente y son bloqueadoras)

//const generaNumero = () => {
//  return Math.floor(Math.random() * 10);
//};
//
//const imprimeNumero = (callback) => {
//  let numero = callback();
//  console.log(numero);
//};
//imprimeNumero(generaNumero);

console.log("==================== 2.2 CALLBACK asynchronous ==================== ");
//B) asynchronous callbacks (se ejecutan cuando algo pasa)

//const bajaVideo = (url) => {
//    console.log(`Bajando video de ... ${url} `);
//    setTimeout(() => {
//      console.log(`Video descargado de ${url} `);
//    }, 4000);
//};

// const bajaVideo = (url, callback) => {
//   console.log(`Bajando video de ... ${url} `);
//   setTimeout(() => {
//     console.log(`Video descargado de ${url} `);
//     callback(url);
//   }, 0);
// };
//
// const procesaVideo = (url) => {
//   console.log(`Ejecutando video de ${url}`);
// };
//
// let url = 'https://youtu.be/gisEHxRQIto';
// //bajaVideo(url);
// //procesaVideo(url);
// bajaVideo(url, procesaVideo);
//
 console.log("====================  2-3 PROMESAS ==================== ");

 /**************************/
/*CONCEPTO#4 ==> PROMISES*/
/*************************/

// 2.3 Promises son Objetos que representan el resultado eventual de una operacion asincrona

// El objeto PROMISE puede tener 3 estados:
// a) PENDING (pendiente) --> la promesa todavia no se cumplio
// b) RESOLVED (resuelta) --> la promesa se cumplio
// c) REJECTED (rechazada) ---> la promesa no se cumplio

//2.3.1 Construccion de una PROMESA
console.log("==================== 2.3.1 Ejemplo de 1 Promesa ==================== ");
 let teHasPortadoBien = true;

 const siMePortoBien = new Promise((resolve, reject) => {
   if (teHasPortadoBien) {
     const telefono = {
       modelo: 'iPhone12',
       capacidad: '128GB',
       color: 'rojo',
     };
     resolve(telefono);
   } else {
     reject('te has portado mal');
   }
 });

//2.3.2 Uso (consumo) de PROMISES

//Antes de usar la promesa hay que definir dos funciones callback (handlers)
// success handler --> implementa la logica si es que la promesa se cumplio
// failure handler --> implementa la logica si es que la promesa no se cumplio

const promesaCumplida = (resolvedValue) => {
  console.log(`Te regalo tu nuevo ${resolvedValue.modelo}`);
};
const promesaRota = (rejectedValue) => {
  console.log(`No te compro nada porque ${rejectedValue}`);
};
//Primera forma de mostrar una promesa
 //siMePortoBien.then(promesaCumplida, promesaRota);

 //segunda forma de mostrar una promesa
 const pideRegalo = () => {
   siMePortoBien
   .then(promesaCumplida)
   .catch(promesaRota);
 };
 pideRegalo();

 console.log("================ 2.4 Ejemplo de encadena de Promesa ============== ");
//2.4  CHAINING DE PROMISES - Encadenar

 const chequeaComportamiento = (comportamiento) => {
   return new Promise((resolve, reject) => {
     if (comportamiento) {
       const telefono = {
         modelo: 'iPhone12',
         capacidad: '128GB',
         color: 'rojo',
       };
       resolve(telefono);
     } else {
       reject('te has portado mal');
     }
   });
 };

 const grabaVideo = (telefono) => {
   const mensaje = `Grabo video para TicToc con mi ${telefono.modelo} nuevo`;
   return Promise.resolve(mensaje);
 };

 let comportamiento = true;
 chequeaComportamiento(comportamiento)
   .then((resolvedValue) => {
     return grabaVideo(resolvedValue);
   })
   .then((resolvedValue) => {
     console.log(resolvedValue);
   })
   .catch((errorMensaje) => {
     console.log(errorMensaje);
   });

   console.log("================ 2.5 Ejemplo de encadena de Promesa ALL ============== ");
//4.5  PROMISE ALL
//A. Promise.all() toma como argumento un array de promesas y retorna UNA SOLA PROMESA
//B. si hay una promesa que no se cumple, Promise.all se rechaza con la razon especificada
//C. si todas las promesas se cumplen, Promise.all se resuelve con
//   un array que contiene los valores especificados en resolve de cada promesa
//D. Promise.all() se usa cuando el orden de las promesas no importa

const chequeaComportamiento2 = (comportamiento) => {
    return new Promise((resolve, reject) => {
      if (comportamiento) {
        const telefono = {
          modelo: 'iPhone12',
          capacidad: '128GB',
          color: 'rojo',
        };
        resolve(telefono);
      } else {
        reject('te has portado mal');
      }
    });
  };
//  
  const chequeaCalificacion = (calificacion) => {
    return new Promise((resolve, reject) => {
      if (calificacion > 85) {
        resolve('Buen trabajo');
      } else {
        reject('Tienes que estudiar mejor');
      }
    });
  };

   const mePorteBien = chequeaComportamiento2(true);
   const estudieBien = chequeaCalificacion(90);
   const promesas = [mePorteBien, estudieBien];
  
   Promise.all(promesas)
     .then((values) => {
       console.log("All: "+values[0].modelo+" "+values[1]);
     })
     .catch((error) => {
       console.log(error);
     });

     console.log("====================  2-6 async await ==================== ");
  
  /****************************/
  /*CONCEPTO#5 ==> async await*/
  /****************************/
  
  //async await es azucar sintactico para trabajar mas facil con promises
  
  async function pideTelefonoNuevo(comportamiento, calificacion) {
    try {
      const promesas = await Promise.all([
        chequeaComportamiento(comportamiento),
        chequeaCalificacion(calificacion),
      ]);
      console.log("Await: "+promesas[0].modelo);
    } catch (error) {
      console.log(error);
    }
  }
  
  pideTelefonoNuevo(true, 90);

  console.log("====================  PROMESAS DE UNO ==================== ");

  const usuarios = [{id:1,nombre:'Juan'},{id:2,nombre:'Miguel'},{id:3,nombre:'Carlos'}];


  const getUsuario = (id) =>{
    return new Promise((resolve, reject)=>{
      //emp = representa un usuario 
      let usuario = usuarios.find((user)=>{
        return user.id === id
      });
      if (usuario) {
        resolve(usuario)
      } else {
        reject("No existe usuario")
      }
    })
  }

  getUsuario(3)
    .then((empleado)=>console.log("Promesa 1 "+empleado.nombre))
    .catch(error=>console.log(error))

    console.log("====================  PROMESAS DE DOS ==================== ");

    const sueldos  = [{id:1,sueldo:200},{id:2,sueldo:300}];

    const getUsuario2 = (id) =>{
      return new Promise((resolve, reject)=>{
        //emp = representa un usuario 
        let usuario = usuarios.find((user)=>{
          return user.id === id
        });
        if (usuario) {
          resolve(usuario)
        } else {
          reject("No existe usuario")
        }
      })
    }
    const getSueldo = (id) =>{
      return new Promise((resolve, reject)=>{
        //emp = representa un usuario 
        let sueldo = sueldos.find((sal)=>{
          return sal.id === id
        });
        if (sueldo) {
          resolve(sueldo)
        } else {
          reject("No existe sueldo")
        }
      })
    }
    let idUser = 4
    //PROMESAS INDEPENDIENTE
    //getUsuario2(idUser)
    //.then((usuario)=>console.log(usuario))
    //.catch(error=>console.log(error))
    //getSueldo(idUser)
    //.then((sueldo)=>console.log(sueldo))
    //.catch(error=>console.log(error))

    //PROMESAS HELP
    //getUsuario2(idUser).then((usuario)=>{
    //  getSueldo(idUser).then((salario)=>{
    //    console.log("El usuario: "+usuario.nombre+" y su sueldo es: "+salario.sueldo);
    //  }).catch((error)=>{
    //    console.log(error);
    //  })
    //}).catch(error=>console.log(error))

    //PROMESA EN CADENA
    let nombreUsuario;
    getUsuario2(idUser).then((usuario)=>{
      nombreUsuario = usuario.nombre;
      return getSueldo(idUser)
    }).then((salario)=>{
      console.log("Promesa 2 -El Usuario: "+nombreUsuario+" y su sueldo es: "+salario.sueldo);
    }).catch(error=>console.log(error))

    console.clear()
    console.log("====================  ASYNC AWAIT ==================== ");

    //---------1 crear promesas
    //funciones flecha
    const getUsuario3 = (id) =>{
      return new Promise((resolve, reject)=>{
        //emp = representa un usuario 
        let usuario = usuarios.find((user)=>{
          return user.id === id
        });
        if (usuario) {
          resolve(usuario)
        } else {
          reject("No existe usuario")
        }
      })
    }
    const getSueld3 = (id) =>{
      return new Promise((resolve, reject)=>{
        //emp = representa un usuario 
        let sueldo = sueldos.find((sal)=>{
          return sal.id === id
        });
        if (sueldo) {
          resolve(sueldo)
        } else {
          reject("No existe sueldo")
        }
      })
    }
  //---------2 crear una funcion con async a wait
  //transforma una funcion en una promesa(retorna una promesa), para eso se necesita crear una funcuion antes
  const getInfoUsuarios = async(id)=>{
    try {
      const usuario = await getUsuario3(id)
      const sueldo = await getSueld3(id)
      return "Async await - el suedo del usuario: "+usuario.nombre+" es: "+sueldo.sueldo;
    } catch (error) {
      throw "Async await - el error es - "+error;      
    }
  }
  //---------3 llamar a la funcion
  getInfoUsuarios(idUser).then((msg)=>{
    console.log("Correcto");
    console.log(msg);
  }).catch(error=>{
    console.log("Mal");
    console.log(error)
  });