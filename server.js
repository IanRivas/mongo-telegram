const express = require('express');
require("dotenv").config();
const router = require('./network/routes.js');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use(router);
router(app);
//la funcion que tengo en el routes que aca se llama router le tengo que pasar un servidor
//le paso la app ,y a este le aplica use y le pasa una ruta y el router del component


app.use('/app',express.static('./public'));


app.listen(process.env.port, ()=>{
    console.log(`Se inicio el servidor en http://localhost:${process.env.port}`);
})
