const model = require('../models/items.model');

const fetchItems = (req, res, next) => {
    let promise = model.fetchItems()

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
const findItem = (req, res, next) => {
    let {id} = req.params;
    let promise = model.findItem(id)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
const createItem = (req, res, next) => {
    let {body} = req;
    let promise = model.createItem(body)
  
    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
module.exports = {
    fetchItems,
    findItem,
    createItem
};