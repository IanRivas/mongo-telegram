//const express = require('express');
const messageRouter = require('../components/message/network.js');

const routes = function( app ){
    app.use('/message',messageRouter)
    
} 

module.exports = routes;