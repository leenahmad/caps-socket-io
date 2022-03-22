'use strict';

// const { Socket } = require('socket.io');

// require("dotenv").config();

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

const hub = io.of('/hub')

hub.on('connection' , (Socket) => {
    Socket.on('pickup' , pickup2);

    function pickup2(payload){
        console.log(
            'event' , {
            event: 'pickup',
            time: new Date(),
            payload : payload
        })
          hub.emit('driver', payload);
        }

        Socket.on('in-transit' , inTransit)

        function inTransit(payload){
            console.log(
                'event' , {
                event: 'in-Transit',
                time: new Date(),
                payload : payload
                })
        }

        Socket.on('delivered' , delivered)

        function delivered(payload){
            console.log(
                'event' , {
                 event: 'delivered',
                 time: new Date(),
                 payload : payload
                })
                hub.emit('delivered' , payload);
        }

})


// hub.on("connection" , (socket) => {
//     console.log("connect on " , socket.id)

//     socket.on("pickup" , (payload) => {
//         pickup(payload);
//         hub.emit("pickup" , payload)
//     })

//     socket.on("inTransit" , (payload) => {
//         inTransit(payload);
//         hub.emit("inTransit" , payload)
//     })

//     socket.on("delivered" , (payload) => {
//         delivered(payload);
//         hub.emit("delivered" , payload)
//     })
// })


// function pickup(payload){
//     let event = {
//             event: 'pickup',
//             time: new Date(),
//             payload : payload
//         }
//         console.log('event' , event);
// }

// function inTransit(payload){
//     let inTransit = {
//         event: 'inTransit',
//         time: new Date(),
//         payload : payload
//     }
//     console.log('event' , inTransit);
// }

// function delivered(payload){
//     let delivered = {
//         event: 'delivered',
//         time: new Date(),
//         payload : payload
//     }
//     console.log('event' , delivered);
// }

    
