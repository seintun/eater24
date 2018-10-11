const knex = require('./db')

//Query returns a list of items details
const fetchItems = () => {
    return knex('items')
        .select(['items.name','items.price','items.descriptions','items.allergens'])
        .orderBy('name', 'ASC');
}
//Query return a specified item with item & details
const findItem = (itemId) => {
    return knex('items')
        .select(['items.name','items.price','items.descriptions','items.allergens'])
        .where('id',itemId);
}
//Insert new item information
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