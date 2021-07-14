const store = require('./store')

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