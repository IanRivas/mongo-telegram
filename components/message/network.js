const express = require('express');
const router = express.Router();
const response = require("../../network/response.js");

router.get('/message',function(req, res){
    console.log(req.query.saludo);
    console.log(req.headers);
    response.success(req, res,"lista de mensajes",333);
})

router.post('/message',function(req, res){
    if(req.query.error == 'okey'){
        response.error(req,res,"error simulado", 400, "error para no mostrar al cliente");
    } else {
        console.log(`quien te conoce ${req.body.name}` );
        response.success(req,res, "creado correctamente", 200);
    }
});

module.exports = router;