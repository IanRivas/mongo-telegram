//el profe empieza con el modelo asi entiende como va a ser la arquitectura y como va a ser la entidad
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
});

const model = mongoose.model('User', mySchema);
module.exports = model;


