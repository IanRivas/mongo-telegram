const express = require('express');
const multer = require('multer');
const path = require('path'); //este lo atremos para meterle una extencion al archivo multer
//metimos multer para manejar archivos , los podemos enviar en mensajes 
// en insominia como multipart form en vez de JSON 
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller")

// const upload = multer({
//     dest: 'public/files', //esta es la ubicacion , en el root folder public folder files 
// });

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/files'); //donde se va a guardar el archivo
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname)) //poniendole la extencion al archivo , sin esto es simplemente un hash
    }
})

const upload = multer({ storage: storage });

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

//paramos upload como midelware , y le decimos que la imagen esta sola por eso single y se va a llamar file en el insomnia
router.post('/',upload.single('file'),function(req, res){
    //req.file es el archivo que pasamos por insomnia 
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


