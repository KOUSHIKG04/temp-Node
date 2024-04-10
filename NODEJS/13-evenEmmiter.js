const eventEmitter  = require('events');

const eventEmitter1 = new eventEmitter() 
//To create custom we need to extend class

// on - listen to an specific event, emit - emit the event  otherwise just for emitting and handling events create instance
eventEmitter1.on('response',()=>{
     console.log(`Data Recived!`);
})

eventEmitter1.on('response',(consensus, bit)=>{
     console.log(`It's Encrypted using ${consensus}${bit}`);
})


eventEmitter1.emit('response','SHA',256); 
// with one emmit we can execute function wih same name
//first listen the event and then place emit later the on
