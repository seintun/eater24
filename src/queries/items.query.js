const knex = require('./db')

//Query returns a list of items details
const fetchItems = (restaurantId) => {
    return knex('items')
        // .select(['items.name','items.price','items.descriptions','items.allergens'])
        .select('*')
        .where('restaurant_id', restaurantId)
        .orderBy('items.name', 'ASC');
}
//Query return a specified item with item & details
const findItem = (itemId, restaurantId) => {
    return knex('items')
        // .select(['items.name','items.price','items.descriptions','items.allergens'])
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
            return `Your '${itemInfo.name}' has been created inside your restaurant`
        })
        .catch(err => {
            return err.message;
        })
}
module.exports = {
    fetchItems,
    findItem,
    createItem
}