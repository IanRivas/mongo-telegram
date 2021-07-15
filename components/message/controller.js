const store = require('./store')

function addMessage(chat, user, message, file){
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
        }

        let fileUrl = '';
        if(file){
            fileUrl = 'http://localhost:3000/app/files/'+ file.filename;
            //el filename es el nombre que le asigna el file 
        }

        const fullMessage = {
            chat: chat, // ahora los mensajes les agregamos un objectId chat 
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        }
        //aca agregamos el archivo para que lo guarde en nuestra base de datos 

        store.add(fullMessage);

        resolve(fullMessage);
    })
}

function getMessage(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function updateMessage(id, messageEdit){
    return new Promise (async (resolve, reject)=>{
        if(!id || !messageEdit){
            reject('invalid data')
        }
        const result = await store.updateText(id, messageEdit);
        resolve(result);
    });
}

function deleteMessage(id){
    return new Promise((resolve, reject)=>{
        if(!id){
            reject('Id invalido');
        }

        store.remove(id)
            .then(()=> resolve())
            .catch(e => reject(e));
    });
}


module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage,
}