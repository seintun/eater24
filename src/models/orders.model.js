const ordersQuery = require('../queries/orders.query')
//calling Query to fetch list of orders of specified restaurant
const fetchOrders = (restaurantId) => {
  let orders = ordersQuery.fetchOrders(restaurantId)

  return orders.then(result => {
    return result.length < 1
      ? { error: 'error retrieving orders', status: 404 }
      : result
  })
}
//calling Query to fetch list of orders belong to a specific user
const fetchUserOrders = (userInfo) => {
  let orders = ordersQuery.fetchUserOrders(userInfo)
  return orders.then(result => {
    return result.length < 1
      ? { error: 'error retrieving user previous orders', status: 404 }
      : result
  })
}
//calling Query to find specific order of specified restaurant
const findOrder = (orderId, restaurantId) => {
  let order = ordersQuery.findOrder(orderId, restaurantId)

  return order.then(result => {
    return result.length < 1
      ? { error: 'error retrieving order', status: 404 }
      : result
  })
}
//calling Query to create order with args pass
const createOrder = (body, restaurantId) => {
  let order = ordersQuery.createOrder(body, restaurantId)

  return order.then(result => {
    return !result
      ? { error: 'error creating new order', status: 404 }
      : result
  })
}
//calling Query to edit specific order
const editOrder = (orderId, orderInfo) => {
  let order = ordersQuery.editOrder(orderId, orderInfo)

  return order.then(result => {
    return result.length < 1
      ? { error: 'error retrieving order', status: 404 }
      : result
  })
}
//calling Query to delete specific order of specified restaurant
const deleteOrder = (orderId) => {
  let order = ordersQuery.deleteOrder(orderId)

  return order.then(result => {
    return result.length < 1
      ? { error: 'error retrieving order', status: 404 }
      : result
  })
}
module.exports = {
  fetchOrders,
  findOrder,
  createOrder,
  editOrder,
  deleteOrder,
  fetchUserOrders
}