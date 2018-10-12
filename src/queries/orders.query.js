const knex = require('./db')

//Query returns a list of orders details
const fetchOrders = () => {
    return knex('orders_items')
        .join('orders', 'orders.id', '=', 'orders_items.order_id')
        .join('items', 'items.id', '=', 'orders_items.item_id')
        .join('restaurants', 'restaurants.id', '=', 'orders.restaurant_id')
        .join('users', 'users.id', '=', 'orders.user_id')
        .select('users.name as userName','orders.id as orderId','restaurants.name as restaurantName','orders.pretax as orderPretax', 'orders.tax as orderTax','orders.tips as orderTips')
}
//Query return a specified order with details
const findOrder = (id) => {
    return knex('orders')
        .select(['orders.pretax'])
        .where('id',id);
}

module.exports = {
    fetchOrders,
    findOrder
}