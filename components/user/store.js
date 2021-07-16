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

module.exports = {
    add: addUser,
    list: getUserList,
}