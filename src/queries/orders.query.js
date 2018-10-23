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
        .select('users.name as userName','orders.id as orderId','restaurants.name as restaurantName', 'items.name as itemName', 'items.descriptions as itemDescriptions','items.price as itemPrice','orders_items.quantity as itemQuantity')
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
        .select('users.name as userName','orders.id as orderId','restaurants.name as restaurantName', 'items.name as itemName', 'items.descriptions as itemDescriptions','items.price as itemPrice','orders_items.quantity as itemQuantity')
        .where('orders.id', orderId)
        .where('orders.restaurant_id', restaurantId)
        // Remove any duplicate data
        .distinct()
}
//Query order table and assign each column with respective values from args: body and req.params.restaurantId for assigning its foreign key
const createOrder = (body, restaurantId) => {
    //Insert new row of order details with FKs user_id and restaurant_id
    return knex('orders')
        .insert({
            user_id:        body.user_Id,
            restaurant_id:  restaurantId
        })
        // Return the primary key of the last entry
        .returning('id')

        .then(result => {
            // Create an empty object
            let arrayOfitemObj = [];
            // Iterates through the value of incoming req.body object's array
            Object.values(body.items).map(el => {
                // push each result into the template object
                let itemOrdered = {
                        //assign FK with the newly id from orders table
                        order_id:  `${result}`,
                        //assign value from the first index (itemId) of item's array
                        item_id:   el[0],
                        //assign value from the first index (quantity) of item's array
                        quantity:  el[1]
                    }
                    //push each object into the arrayOfitemObj
                    arrayOfitemObj.push(itemOrdered);
                })
                return knex('orders_items')
                    //Insert all the item objects into orders_items table
                    .insert(arrayOfitemObj);
            })
            .catch(err => {
                return err.message;
            })
}
//Query delete a specified order with details
const deleteOrder = (orderId, restaurantId) => {
    // return innerJoin results from orders, items, restaurants, users tables
    return knex('orders')
        .where('orders.id', orderId)
        .where('orders.restaurant_id', restaurantId)
        .del();
}
module.exports = {
    fetchOrders,
    findOrder,
    createOrder,
    deleteOrder
}