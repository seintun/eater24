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
const loginUser = (userInfo) => {
  let user = usersQuery.loginUser(userInfo)

  return user.then(result => {
    return !result
      ? { error: 'error finding user', status: 404 }
      : result
  })
}
const editUser = (userId, userInfo) => {
  let user = usersQuery.editUser(userId, userInfo)

  return user.then(result => {
    return result.length < 1
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}

const deleteUser = (id) => {
  let user = usersQuery.deleteUser(id)

  return user.then(result => {
    return result.length < 1
      ? { error: 'error deleting users', status: 404 }
      : result
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