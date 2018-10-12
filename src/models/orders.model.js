const ordersQuery = require('../queries/orders.query')

const fetchOrders = (restaurantId) => {
  let orders = ordersQuery.fetchOrders(restaurantId)

  return orders.then(result => {
    return result.length < 1
      ? { error: 'error retrieving orders', status: 404 }
      : result
  })
}
const findOrder = (orderId, restaurantId) => {
  let user = ordersQuery.findOrder(orderId, restaurantId)

  return user.then(result => {
    return result.length < 1
      ? { error: 'error retrieving orders', status: 404 }
      : result
  })
}

module.exports = {
  fetchOrders,
  findOrder
}