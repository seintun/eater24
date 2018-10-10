const knex = require('./db')

//Query returns a list of Users details
fetchUsers = () => {
    return knex('users').orderBy('created_at', 'DESC');
}
//Query return a specified User with name & email
findUser = (id) => {
    return knex('users').select(['users.name','users.email']).where('id',id);
}
module.exports = {
    fetchUsers,
    findUser
}