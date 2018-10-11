const knex = require('./db')

//Query returns a list of Users details
const fetchUsers = () => {
    return knex('users')
        .orderBy('created_at', 'DESC');
}
//Query return a specified User with name & email
const findUser = (id) => {
    return knex('users')
        .select(['users.name','users.email'])
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
module.exports = {
    fetchUsers,
    findUser,
    createUser
}