const express = require('express');
const cors = require('cors');
require("dotenv").config();
const routes = require('./network/routes.js');
const db = require('./db');

const url = process.env.db;
db(url);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


routes(app);

app.use('/app',express.static('./public'));


app.listen(process.env.port, ()=>{
    console.log(`Se inicio el servidor en http://localhost:${process.env.port}`);
})
