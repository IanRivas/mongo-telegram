const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

async function getUserList(name){
    let filter = {};
    if(name !== null){
        filter = { name: name };
    } 
    const users = await Model.find(filter);
    return users;
}
//el profe hizo lo mismo pero en general con solo return Model.find();

module.exports = {
    add: addUser,
    list: getUserList,
}