const express = require('express');
const multer = require('multer');
const path = require('path'); 
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller")

// const upload = multer({
//     dest: 'public/files', //esta es la ubicacion , en el root folder public folder files 
// });

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/files'); 
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname)) 
    }
})

const upload = multer({ storage: storage });

router.get('/',function(req, res){
    const filterMessage = req.query.user || null;
    controller.getMessage(filterMessage)
        .then((messagelist)=>{
            response.success(req, res, messagelist, 200);
        })
        .catch((err) => {
            response.error(req, res, "Unexpected Error", 500, err)
        });
});

router.post('/',upload.single('file'),function(req, res){
    controller.addMessage(req.body.chat ,req.body.user, req.body.message, req.file)
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


