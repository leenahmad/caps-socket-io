'use strict';


require("dotenv").config();


const io = require("socket.io-client");

const host = process.env.HOST || 'http://localhost:3000'; 

const connection = io.connect(`${host}/hub`);

connection.on('driver' , driver)

function driver (payload){
    connection.emit("pickup2" , payload);
    setTimeout(()=> {
        console.log(`DRIVER: pickedup ${payload.orderId}`);

        connection.emit('in-transit' , payload);
    }, 1000)
    setTimeout(()=>{
        console.log(`DRIVER: delivered up ${payload.orderId}`);

        connection.emit('delivered' , payload);
    }, 2000)
}

// connection.on("pickup" , (payload) => {
   
//     connection.emit("pickup2" , payload);
//     setTimeout(()=> {
//         console.log(`DRIVER: pickedup2 ${payload.orderId}`);

//         connection.emit('in-transit' , payload);
//     }, 2000)
//     setTimeout(()=>{
//         console.log(`DRIVER: delivered up ${payload.orderId}`);

//         connection.emit('delivered' , payload);
//     }, 2000)
  
// })