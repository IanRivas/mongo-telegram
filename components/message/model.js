const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        //aca estamos diciendo que conecte mi usuario con el mensaje
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});
//al principio el user era un simple string , pero ahora lo pasamos a objectID
//en el insominia le paso el id ,  "user": "43l4jla34ñl4jañj4"  ahi lo vincula con el usuario
//pero sale todos esos numeros en user , para hacer que aparesca el name tenemos que 
//usar populate a la hora de hacer el get para que se vean bien los datos 

const model = mongoose.model('Message', mySchema);
module.exports = model;

