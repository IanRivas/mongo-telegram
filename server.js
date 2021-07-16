const express = require('express');
const app = express();

const server = require('http').Server(app); //con esto creamos el servidor http
const socket = require('./socket'); //nos traemos el archivo socket para conectarnos desde el servidor 


const cors = require('cors');
require("dotenv").config();
const routes = require('./network/routes.js');
const db = require('./db');

const url = process.env.db;
db(url);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//ahora le pasamos nuestro servidor http para que se conecte a socket.io
socket.connect(server); 
routes(app);

app.use('/app',express.static('./public'));


server.listen(process.env.port, ()=>{
    console.log(`Se inicio el servidor en http://localhost:${process.env.port}`);
})
