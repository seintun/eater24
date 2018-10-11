const knex = require('./db')

//Query returns a list of orders details
const fetchOrders = () => {
    return knex('orders')
        .orderBy('created_at', 'DESC');
}
//Query return a specified User with name & email
const findOrder = (id) => {
    return knex('orders')
        .select(['orders.pretax'])
        .where('id',id);
}

module.exports = {
    fetchOrders,
    findOrder
}