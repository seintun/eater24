const usersQuery = require('../queries/users.query')

const fetchUsers = () => {
  let users = usersQuery.fetchUsers()

  return users.then(result => {
    return result.length < 1
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}
const findUser = (id) => {
  let user = usersQuery.findUser(id)

  return user.then(result => {
    return result.length < 1
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}
const createUser = (userInfo) => {
  let user = usersQuery.createUser(userInfo)

  return user.then(result => {
    return !result
      ? { error: 'error creating new user', status: 404 }
      : result
  })
}
module.exports = {
  fetchUsers,
  findUser,
  createUser
}