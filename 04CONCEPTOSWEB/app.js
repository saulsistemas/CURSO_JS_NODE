const express = require('express');
const path = require('path');

const app = express()
const port = 8080;
//TODO: require('hbs)
const viewsPath = path.join(__dirname, '/public/views');
app.set('views', viewsPath);
app.set('view engine', 'hbs');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/',function(request,response){
    response.render('home',{
        nombre: 'Saul Santmaria',
        titulo: 'curso de node',
    })
})
app.get('/generic', function (req, res) {
    res.sendFile(__dirname+'/public/generic.html')
})
app.get('/elements', function (req, res) {
    res.sendFile(__dirname+'/public/elements.html')
})
app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html')
})
app.listen(port,function(){
    console.log("el servidor esta funcionando en el server ",port);
})