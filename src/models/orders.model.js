const ordersQuery = require('../queries/orders.query')

const fetchOrders = () => {
  let orders = ordersQuery.fetchOrders()

  return orders.then(result => {
    return result.length < 1
      ? { error: 'error retrieving orders', status: 404 }
      : result
  })
}
const findOrder = (id) => {
  let user = ordersQuery.findOrder(id)

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