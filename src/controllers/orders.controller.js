const model = require('../models/orders.model');

const fetchOrders = (req, res, next) => {
    //de-structure req.params for specified restaurantsId
    let {restaurantId} = req.params;
    let promise = model.fetchOrders(restaurantId)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
const findOrder = (req, res, next) => {
    //de-structure req.params for specified itemId
    let {id} = req.params;
    //de-structure req.params for specified restaurantsId
    let {restaurantId} = req.params;
    let promise = model.findOrder(id, restaurantId)

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