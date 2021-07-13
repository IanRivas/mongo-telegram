
function addMessage(user, message){
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }

        console.log(fullMessage);
        resolve(fullMessage);
    })
}
//nuestro controller toma los datos de la req.body y genera el mensaje 
//como es una promesa si alguno de los 2 no entran van a ejecutar el reject 
//si todo sale bien crea el mensaje y hace el resolve y se envia de respuesta

module.exports = {
    addMessage,
}