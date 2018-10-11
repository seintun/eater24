const model = require('../models/orders.model');

const fetchOrders = (req, res, next) => {
    let promise = model.fetchOrders()

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
const findOrder = (req, res, next) => {
    let {id} = req.params;
    let promise = model.findOrder(id)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}


module.exports = {
    fetchOrders,
    findOrder
};