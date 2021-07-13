const express = require('express');
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller")

router.get('/',function(req, res){
    controller.getMessage()
        .then((messagelist)=>{
            response.success(req, res, messagelist, 200);
        })
        .catch((err) => {
            response.error(req, res, "Unexpected Error", 500, err)
        });
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


module.exports = router;


