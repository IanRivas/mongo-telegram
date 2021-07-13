//const express = require('express');
const messageRouter = require('../components/message/network.js');

const routes = function( app ){
    app.use('/message',messageRouter)
    //todas las llamadas a message la gestiona el componente de message 
} 

module.exports = routes;