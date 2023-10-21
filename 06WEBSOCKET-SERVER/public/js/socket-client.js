//Referencias del HTML

const lbl1 = document.querySelector('#lbl1')
const lbl2 = document.querySelector('#lbl2')


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