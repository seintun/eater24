const knex = require('./db')

//Query returns a list of items details
const fetchItems = (restaurantId) => {
    return knex('items')
        .select('*')
        .where('restaurant_id', restaurantId)
        .orderBy('items.name', 'ASC');
}
//Query return a specified item with item & details
const findItem = (itemId, restaurantId) => {
    return knex('items')
        .select('*')
        .where('restaurant_id', restaurantId)
        .where('id', itemId);
}
//Query items table and assign each column with respective values from args: itemInfo and req.params.restaurantId for assigning its foreign key
const createItem = (itemInfo, restaurantId) => {
    return knex('items')
        .insert({
            restaurant_id: restaurantId,
            name:          itemInfo.name,
            price:         itemInfo.price,
            descriptions:  itemInfo.descriptions,
            allergens:     itemInfo.allergens
        })
        .then(result => {
            //Return successful message once the entry is completed
            return `Your new menu item '${itemInfo.name}' has been created inside your restaurant's menu`
        })
        .catch(err => {
            return err.message;
        })
}
//Query to update restaurant's specific menu item
const editItem = (itemId, restaurantId, itemInfo) => {
    console.log(itemId, restaurantId, itemInfo)
    return knex('items')
        .where('id', itemId)
        .update({
            id:            itemId,
            restaurant_id: restaurantId,
            name:          itemInfo.name,
            price:         itemInfo.price,
            descriptions:  itemInfo.descriptions,
            allergens:     itemInfo.allergens
        })
        .then(result => {
            //Return successful message once the entry is completed
            return `Your new menu item '${itemInfo.name}' has been updated inside your restaurant's menu`
        })
        .catch(err => {
            return err.message;
        })
}
//Query delete a specified item with item & details
const deleteItem = (itemId, restaurantId) => {
    console.log(restaurantId)
    return knex('items')
        .where('restaurant_id', restaurantId)
        .where('id', itemId)
        .del();
}
module.exports = {
    fetchItems,
    findItem,
    createItem,
    editItem,
    deleteItem
}