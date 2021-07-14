const Model = require('./model');

function addMessage(message){
    const myMessage = new Model(message);
    console.log(message);
    myMessage.save();
}

async function getMessage(filterUser){
    let filter = {};
    if(filterUser !== null){
        filter = { user: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;

}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
        //con esto nos busca el id que sea igual al que le pasemos 
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id){
    return Model.deleteOne({
        _id:id
    });
    //estas cosas con model devuelve una promesa 
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage,
}