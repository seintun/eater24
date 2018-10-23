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

//creating a new order
const createOrder = (req, res, next) => {
  //de-structure req and extract body
  let {body} = req;
  //de-structure req.params for specified restaurantsId
  let {restaurantId} = req.params;
  //pass as arguments for model.createOrder
  let promise = model.createOrder(body, restaurantId)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
const editOrder = (req, res, next) => {
  //de-structure req.params for specified itemId
  let {id} = req.params;
  let {body} = req;
  let promise = model.editOrder(id, body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
const deleteOrder = (req, res, next) => {
  //de-structure req.params for specified itemId
  let {id} = req.params;
  let promise = model.deleteOrder(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}


module.exports = {
    fetchOrders,
    findOrder,
    createOrder,
    editOrder,
    deleteOrder
};