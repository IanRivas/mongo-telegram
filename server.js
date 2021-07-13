const express = require('express');
require("dotenv").config();
const router = require('./components/message/network');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);


app.use('/app',express.static('./public'));


app.listen(process.env.port, ()=>{
    console.log(`Se inicio el servidor en http://localhost:${process.env.port}`);
})
