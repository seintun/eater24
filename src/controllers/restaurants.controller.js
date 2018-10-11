const model = require('../models/restaurants.model');

const fetchRestaurants = (req, res, next) => {
    let promise = model.fetchRestaurants()

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
const findRestaurant = (req, res, next) => {
    let {id} = req.params;
    let promise = model.findRestaurant(id)

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}
// const createRestaurant = (req, res, next) => {
//     res.send(`POST: You are creating the Restaurant page!`)
// }
// const editRestaurant = (req, res, next) => {
//     res.send(`PUT: You are editing the Restaurant page!`)
// }
// const deleteRestaurant = (req, res, next) => {
//     res.send(`DELETE: You are deleting the Restaurant page!`)
// }
module.exports = {
    fetchRestaurants,
    findRestaurant
};
// module.exports = {getRestaurant};
// module.exports = {createRestaurant};
// module.exports = {editRestaurant};
// module.exports = {deleteRestaurant};