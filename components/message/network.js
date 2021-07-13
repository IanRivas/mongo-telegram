const express = require('express');
const router = express.Router();
const response = require("../../network/response.js");
const controller = require("./controller.js")

router.get('/',function(req, res){
    console.log(req.query.saludo);
    console.log(req.headers);
    response.success(req, res,"lista de mensajes",333);
})

router.post('/',function(req, res){

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req,res, fullMessage, 200);
        })
        .catch(() => {
            response.error(req, res, "Informacion invalida", 400, "error en el controller message post");
        })

});
//con el then y el catch manejo la promesa y ejecuto los response

module.exports = router;


