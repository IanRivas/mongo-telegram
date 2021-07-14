const mongoose = require('mongoose');
//importamos mongoose
const Schema = mongoose.Schema;
//separamos la clase schema porque es de lo que mas vamos a utilizar 

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
        //aca estamos definiendo que tipos de datos son , en esta forma de objeto le puedo meter mas filtros
    },
    date: Date,
});

const model = mongoose.model('Message', mySchema);
module.exports = model;

//aca estamos creando un model 
//primer parametro como se va a llamar nuestra collection(tabla) en mongo
//segundo parametro el schema que tiene la collection 
