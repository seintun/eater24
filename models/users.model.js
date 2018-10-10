const usersQuery = require('../queries/app')

const fetchUsers = () => {
  users = usersQuery.fetchUsers()

  return users.then(result => {
    return result.length < 1
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}
const findUser = (id) => {
  user = usersQuery.findUser(id)

  return user.then(result => {
    return result.length < 1
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}
module.exports = {
  fetchUsers,
  findUser
}