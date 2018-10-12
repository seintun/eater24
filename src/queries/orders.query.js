const knex = require('./db')

//Query returns a list of orders details
const fetchOrders = (restaurantId) => {
    return knex('orders')
        .select('*')
        .where('restaurant_id', restaurantId)
}
//Query return a specified order with details
const findOrder = (orderId, restaurantId) => {
    return knex('orders')
        .select('*')
        .where('restaurant_id', restaurantId)
        .where('id', orderId);
}

module.exports = {
    fetchOrders,
    findOrder
}