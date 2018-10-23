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

const loginUser = (req, res, next) => {
  let {body} = req;
  let promise = model.loginUser(body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

const editUser = (req, res, next) => {
  let {id} = req.params;
  let {body} = req;
  let promise = model.editUser(id, body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

const deleteUser = (req, res, next) => {
  let {id} = req.params;
  let promise = model.deleteUser(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

module.exports = {
    fetchUsers,
    findUser,
    createUser,
    loginUser,
    editUser,
    deleteUser
};