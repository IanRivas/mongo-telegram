const db = require('mongoose');
const Model = require('./model');
require('dotenv').config();

const uri = process.env.db;
db.Promise = global.Promise;
//esto lo hacemos para podes usar promesas en vez de callbacks 
//global es un objetos de node.js que nos va a permitir entrar al scope global
//dentro del scope global tenemos la clase promise, que es una clase nativa de js
//si tuvieras otra forma de manejar promesas con alguna libreria , lo pones aca 

db.connect(uri,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('[db] Conectada con éxito'))
.catch(err=>console.error('[db]',err));
// aca nos estamos conectando a la base de datos 
//primer parametro ,donde nos tenemos que conectar 
//segundo parametro, perdirle que use el nuevo parser de mongodb , con esto evitamos que haya errores de compatibilidad si el servidor es mas nuevo o viejo 
//tambien le podes poner mas un compañero uso useUnifiedTopology - true

function addMessage(message){
    const myMessage = new Model(message);
    console.log(message);
    //estamos instanciando una nueva clase de esto modelo mandandole el mensaje 
    //este es el modelo que definimos en Model.js
    myMessage.save();
}

async function getMessage(){
    const messages = await Model.find();
    //aca estamos pidiendo todos los documentos
    return messages;

}

module.exports = {
    add: addMessage,
    list: getMessage
    // get
    // update
    // delete
}