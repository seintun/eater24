const knex = require('./db')

//Query returns a list of Users details
const fetchUsers = () => {
    return knex('users')
        .select(['users.id','users.name','users.email'])
        .orderBy('users.name', 'ASC');
}
//Query return a specified User with name & email
const findUser = (id) => {
    return knex('users')
        .select(['users.id','users.name','users.email'])
        .where('id',id);
}
//Insert new User information
const createUser = (userInfo) => {
    return knex('users')
        .insert({
            name:       userInfo.name,
            userId:     userInfo.userId,
            password:   userInfo.password,
            email:      userInfo.email
        })
        .then(result => {
            return `Welcome ${userInfo.name}! Your userId '${userInfo.userId}' has been created`
        })
        .catch(err => {
            return err.message;
        })
}
const loginUser = (userInfo) => {
    return knex('users')
        .select(['users.id','users.name','users.email'])
        .where('users.userId',userInfo.userName)
        .where('users.password',userInfo.password);
}
//Query delete a specified User from database
const deleteUser = (id) => {
    return knex('users')
        .where('id',id)
        .del();
}
module.exports = {
    fetchUsers,
    findUser,
    createUser,
    loginUser,
    deleteUser
}