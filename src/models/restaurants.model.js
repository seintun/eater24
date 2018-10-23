const restaurantsQuery = require('../queries/restaurants.query')

const fetchRestaurants = () => {
  let restaurants = restaurantsQuery.fetchRestaurants()

  return restaurants.then(result => {
    return result.length < 1
      ? { error: 'error retrieving restaurants', status: 404 }
      : result
  })
}
const findRestaurant = (id) => {
  let restaurant = restaurantsQuery.findRestaurant(id)

  return restaurant.then(result => {
    return result.length < 1
      ? { error: 'error retrieving restaurants', status: 404 }
      : result
  })
}
const createRestaurant = (restaurantInfo) => {
  let restaurant = restaurantsQuery.createRestaurant(restaurantInfo)

  return restaurant.then(result => {
    return !result
      ? { error: 'error creating new restaurant', status: 404 }
      : result
  })
}
const editRestaurant = (restaurantId, restaurantInfo) => {
  let restaurant = restaurantsQuery.editRestaurant(restaurantId, restaurantInfo)

  return restaurant.then(result => {
    return result.length < 1
      ? { error: 'error editing restaurants', status: 404 }
      : result
  })
}
const deleteRestaurant = (id) => {
  let restaurant = restaurantsQuery.deleteRestaurant(id)

  return restaurant.then(result => {
    return result.length < 1
      ? { error: 'error retrieving restaurants', status: 404 }
      : result
  })
}
module.exports = {
  fetchRestaurants,
  findRestaurant,
  createRestaurant,
  editRestaurant,
  deleteRestaurant
}