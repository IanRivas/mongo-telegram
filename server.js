const express = require('express');
const router = express.Router();
require("dotenv").config();
const response = require("./network/response");


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

router.get('/message',function(req, res){
    console.log(req.query.saludo);
    console.log(req.headers);
    response.success(req, res,"lista de mensajes",333);
})
//aca usamos un query /message?saludo=hola
//el .header nos deja ver el header de nuestro req, si viene de chrome viene con mas info
//headers utiles user-agent para saber de donde viene,cache-control 
//res.header podemos ponerle un json para enviarlo en la respuesta como header 

router.post('/message',function(req, res){
    if(req.query.error == 'okey'){
        response.error(req,res,"error simulado", 400, "error para no mostrar al cliente");
    } else {
        console.log(`quien te conoce ${req.body.name}` );
        response.success(req,res, "creado correctamente", 200);
    }
});
//al response le tenemos que pasar el req, res , el mensaje que queremos que aparesca y el status
app.use('/app',express.static('./public'));
//con esto estamos mostrando estaticos , todo lo que este en public se rederiza en app


app.listen(process.env.port, ()=>{
    console.log(`Se inicio el servidor en http://localhost:${process.env.port}`);
})
