exports.success = function(req, res, message, status){
    res.status(status || 200).send({
        error: '',
        body: message
    });
}
//este se encarga de hacer las respuestas 

exports.error = function(req, res, error, status, details){
    console.error('[Response error]:' + details); 
// esto es para que nos diga el verdadero error mientras al usuario le llega un mensaje generico tipo "error inesperado"
    res.status(status || 500).send({
        error: error,
        body: ''
    });
}
//jamas devolver informacion del error al cliente JAMAS
