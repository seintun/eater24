const knex = require('./db')

//Query returns a list of Users details
const fetchUsers = () => {
    return knex('users')
        .select(['users.id','users.userId','users.name','users.email'])
        .orderBy('users.name', 'ASC');
}
//Query return a specified User with name & email
const findUser = (id) => {
    return knex('users')
        .select(['users.id','users.userId','users.name','users.email'])
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
        .returning('*')
}
const loginUser = (userInfo) => {
    return knex('users')
        .select(['users.id','users.userId','users.name','users.email'])
        .where('users.userId',userInfo.userId)
        .where('users.password',userInfo.password)
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.message;
        })
}
//Update existing User information
const editUser = (userInfo) => {
    return knex('users')
        .where('id', userInfo.id)
        .update({
            id:         userInfo.id,
            name:       userInfo.name,
            userId:     userInfo.userId,
            password:   userInfo.password,
            email:      userInfo.email
        })
        .then(result => {
            return `Welcome ${userInfo.name}! Your userId '${userInfo.userId}' has been updated!`
        })
        .catch(err => {
            return err.message;
        })
}
//Query delete a specified User from database
const deleteUser = (id) => {
  return knex('users')
    .where('id',id)
    .del()
    .then(result => {
      return result
    })    
}
module.exports = {
    fetchUsers,
    findUser,
    createUser,
    loginUser,
    editUser,
    deleteUser
}