const express = require('express');
//aca nos traemos express
const router = express.Router();
//aca nos traemos el router para hacer .get .post .update .delete
require("dotenv").config();
//aca nos traemos la libreria dotenv

const app = express();
//creando la aplicacion express
app.use(express.json());
//esto es para manejar json en el body
app.use(express.urlencoded({extended: false}));
//esto es para manejar esas tablas de insomnia en el body
app.use(router);
//esto para que la app use el router
router.get('/message',function(req, res){
    console.log(req.query.saludo);
    res.send(['hola']);
})
//aca usamos un query /message?saludo=hola

router.get('/', function(req, res){
    console.log(req.body.text);
    res.send('todo bien negro')
})
//aca usamos un form url encoded 

router.post('/',function(req, res){
    res.send({'esto':'salio bien'});
    console.log(`quien te conoce ${req.body.name}` );
});
//aca usamos el body

//si uso use en vez del router , el use es para todas las peticiones 

app.listen(process.env.port, ()=>{
    console.log(`Se inicio el servidor en http://localhost:${process.env.port}`);
})
//el listen para escuchas un puerto , le pasamos un puerto por env y una funcion para hacer despues