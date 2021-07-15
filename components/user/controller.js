const store = require('./store');

function addUser(name){
    if(!name){
        return Promise.reject('Invalid name');
        //como ya estamos devolviendo una promesa ,esta esta forma de crear y mandar un reject
    }

    const user = {
        name,
    };

    return store.add(user);
    //aca estamos devolviendo una promesa al network
}

function getUsers(name){
    return new Promise((resolve, reject)=>{
        resolve(store.list(name));
    });
}

module.exports = {
    addUser,
    getUsers,
}