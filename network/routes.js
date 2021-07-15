//const express = require('express');
const messageRouter = require('../components/message/network');
const userRouter = require('../components/user/network');
const chatRouter = require('../components/chat/network');

const routes = function( app ){
    app.use('/message',messageRouter);
    app.use('/user',userRouter);
    app.use('/chat', chatRouter);
    
} 

module.exports = routes;