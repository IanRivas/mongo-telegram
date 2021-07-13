const express = require('express');
const router = express.Router();
const response = require("../../network/response.js");

router.get('/',function(req, res){
    console.log(req.query.saludo);
    console.log(req.headers);
    response.success(req, res,"lista de mensajes",333);
})

router.post('/',function(req, res){
    if(req.query.error == 'okey'){
        response.error(req,res,"error simulado", 400, "error para no mostrar al cliente");
    } else {
        console.log(`quien te conoce ${req.body.name}` );
        response.success(req,res, "creado correctamente", 200);
    }
});

module.exports = router;

// el router de mi componente lo recibe routes.js y ahi routes recibe la app y 
// le aplica todas las rutas de todos los componentes 
