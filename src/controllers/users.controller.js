const model = require('../models/users.model');

const fetchUsers = (req, res, next) => {
    let promise = model.fetchUsers()

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
const findUser = (req, res, next) => {
    let {id} = req.params;
    let promise = model.findUser(id)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
const createUser = (req, res, next) => {
  let {body} = req;
  let promise = model.createUser(body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
// const editUser = (req, res, next) => {
//     res.send(`PUT: You are editing the User page!`)
// }
// const deleteUser = (req, res, next) => {
//     res.send(`DELETE: You are deleting the User page!`)
// }
module.exports = {
    fetchUsers,
    findUser,
    createUser
    // editUser,
    // deleteUser
};