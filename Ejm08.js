// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// myEmitter.on('eventA', () =>{
//     console.log('Listener 1 for eventA executed');
// });

// myEmitter.on('eventA', () =>{
//     console.log('Listener 2 for eventA executed');
// });

// myEmitter.emit('eventA');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Definir funciones para manejar eventos
function handleEventA() {
    console.log('Listener 1 for eventA executed');
}

function handleEventASecond() {
    console.log('Listener 2 for eventA executed');
}

// Registrar funciones de manejo de eventos
myEmitter.on('eventA', handleEventA);
myEmitter.on('eventA', handleEventASecond);

// Emitir evento
myEmitter.emit('eventA');
