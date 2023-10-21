//Referencias del HTML

const lbl1 = document.querySelector('#lbl1')
const lbl2 = document.querySelector('#lbl2')

const txtMensaje=   document.querySelector('#txtMensaje')
const btnEnviar =   document.querySelector('#btnEnviar')
const socket = io();

socket.on('connect',()=>{
    console.log('conectado');

    lbl1.style.display=''
    lbl2.style.display='none'
})

socket.on('disconnect',()=>{
    console.log('desconectado');
    lbl2.style.display=''
    lbl1.style.display='none'
})

btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id:123,
        fecha: new Date().getTime()
    }
    
    socket.emit('enviar-mensaje',payload)
})