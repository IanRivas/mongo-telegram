const express = require('express');
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller")

router.get('/',function(req, res){
    const filterMessage = req.query.user || null;
    //esto lo creamos aparacte para filtrar por usuario y se lo pasamos al controller del get
    controller.getMessage(filterMessage)
        .then((messagelist)=>{
            response.success(req, res, messagelist, 200);
        })
        .catch((err) => {
            response.error(req, res, "Unexpected Error", 500, err)
        });
});

router.post('/',function(req, res){

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req,res, fullMessage, 200);
        })
        .catch(() => {
            response.error(req, res, "Informacion invalida", 400, "error en el controller message post");
        })

});

router.patch('/:id', function(req, res){

    controller.updateMessage(req.params.id, req.body.messageEdit)
        .then((data)=>{
            response.success(req, res, data, 200);
        })
        .catch((e)=>{
            response.error(req, res, 'Error Interno', 500, e);
        });
    //todo lo que esta despues del /message/(esto lo va a tomar como id)
    //en nuestro caso estamos poniendo id de los mensajes 
    //y el texto es el mensaje que vamos a modificar en el message
});

router.delete('/:id',function(req, res){
    controller.deleteMessage(req.params.id)
        .then(()=>{
            response.success(req, res, `Mensaje ${req.params.id} eliminado`,200);
        })
        .catch((e)=>{
            response.error(req, res, 'Error interno',500, e)
        });
})

module.exports = router;


