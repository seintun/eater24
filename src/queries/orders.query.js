const knex = require('./db')

//Query returns a list of orders details
const fetchOrders = (restaurantId) => {
    // return innerJoin results from orders, items, restaurants, users tables
    return knex('orders_items')
        .join('orders', 'orders.id', '=', 'orders_items.order_id')
        .join('items', 'items.id', '=', 'orders_items.item_id')
        .join('restaurants', 'restaurants.id', '=', 'orders.restaurant_id')
        .join('users', 'users.id', '=', 'orders.user_id')
        // Select certain columns and generate order report
        .select('users.name as userName','orders.id as orderId','restaurants.name as restaurantName','orders.pretax as orderPretax', 'orders.tax as orderTax','orders.tips as orderTips')
        .where('orders.restaurant_id', restaurantId)
        // Remove any duplicate data
        .distinct()
}
//Query return a specified order with details
const findOrder = (orderId, restaurantId) => {
    // return innerJoin results from orders, items, restaurants, users tables
    return knex('orders_items')
        .join('orders', 'orders.id', '=', 'orders_items.order_id')
        .join('items', 'items.id', '=', 'orders_items.item_id')
        .join('restaurants', 'restaurants.id', '=', 'orders.restaurant_id')
        .join('users', 'users.id', '=', 'orders.user_id')
        // Select certain columns and generate order report
        .select('users.name as userName','orders.id as orderId','restaurants.name as restaurantName','orders.pretax as orderPretax', 'orders.tax as orderTax','orders.tips as orderTips')
        .where('orders.id', orderId)
        .where('orders.restaurant_id', restaurantId)
        // Remove any duplicate data
        .distinct()
    }
//Query order table and assign each column with respective values from args: body and req.params.restaurantId for assigning its foreign key
const createOrder = (body, restaurantId) => {
    // console.log(body,'this is body inside QUERY')
    // console.log(restaurantId,'this is resId inside QUERY')
    return knex('orders')
        .insert({
            user_id:        body.user_Id,
            restaurant_id:  restaurantId,
            pretax:         "50",
            tax:            "24",
            tips:           "12"
        })
        .returning('id')

        .then(result => {
            let arrayOfObj = [];
            //Return successful message once the entry is completed
            body.items_id.map(item => {
                let itemOrdered = {
                                order_id:   `${result}`,
                                item_id:    item
                            }
                    arrayOfObj.push(itemOrdered);
                })
            return knex('orders_items')
                .insert(arrayOfObj);
        })
        .catch(err => {
            return err.message;
        })
}
module.exports = {
    fetchOrders,
    findOrder,
    createOrder
}