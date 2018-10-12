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
  let order = ordersQuery.findOrder(orderId, restaurantId)

  return order.then(result => {
    return result.length < 1
      ? { error: 'error retrieving order', status: 404 }
      : result
  })
}

module.exports = {
  fetchOrders,
  findOrder
}