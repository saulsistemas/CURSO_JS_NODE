const http = require('http');
//request  = solicitud que esta solicitando por parte del cliente
//response = lo que yo le voy a responder
const server = http.createServer(function(request, response){
    //response.writeHead(200, { 'Content-Type': 'application/json'})
    response.setHeader('Content-Disposition','attachment; filename=lista.csv')
    response.writeHead(200, { 'Content-Type': 'application/csv'})

    const persona ={
        id:1,
        mombre:'saul'
    }
    response.write('id; nombre\n' );
    response.write('1; juan\n' );
    response.write('2; pedro\n' );
    response.end()
}).listen(8080);

console.log("escuchando en el puerto ", 8080);
