const model = require('../models/items.model');

//Fetching a list of menu items
const fetchItems = (req, res, next) => {
    //de-structure req.params for specified restaurantsId
    let {restaurantId} = req.params;
    let promise = model.fetchItems(restaurantId)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
//Finding a specific menu item
const findItem = (req, res, next) => {
    //de-structure req.params for specified itemId
    let {id} = req.params;
    //de-structure req.params for specified restaurantsId
    let {restaurantId} = req.params;
    let promise = model.findItem(id, restaurantId)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
//Creating a new menu item
const createItem = (req, res, next) => {
    //de-structure req and extract body
    let {body} = req;
    //de-structure req.params for specified restaurantsId
    let {restaurantId} = req.params;
    //pass as arguments for model.createItem
    let promise = model.createItem(body, restaurantId)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
//Updating a specific menu item
const editItem = (req, res, next) => {
  //de-structure req.params for specified itemId
  let {id} = req.params;
  //de-structure req.params for specified restaurantsId
  let {restaurantId} = req.params;
  //de-structure req for updated menuInfo
  let {body} = req
  let promise = model.editItem(id, restaurantId, body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
//Deleting a specific menu item
const deleteItem = (req, res, next) => {
  //de-structure req.params for specified itemId
  let {id} = req.params;
  //de-structure req.params for specified restaurantsId
  let {restaurantId} = req.params;
  let promise = model.deleteItem(id, restaurantId)

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
    createItem,
    editItem,
    deleteItem
};