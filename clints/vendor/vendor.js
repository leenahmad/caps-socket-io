'use strict';


const { faker } = require("@faker-js/faker");

const io = require("socket.io-client");

const host = process.env.HOST || 'http://localhost:3000'; 

const connection = io.connect(`${host}/hub`);

setInterval(() => {
    let order = {
        store: faker.company.companyName(),
        orderId: faker.datatype.uuid(),
        customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
        address: `${faker.address.city()} , ${faker.address.stateAbbr()}`
    }
    connection.emit('pickup' , order);


},5000)

connection.on('delivered' , (payload) => {
    console.log(`vendor : thank you ${payload.orderId}`)
})