const knex = require('./db')

//Query returns a list of items details
const fetchItems = () => {
    return knex('items')
        .select(['items.name','items.price','items.descriptions','items.allergens'])
        .orderBy('name', 'ASC');
}
//Query return a specified item with item & details
const findItem = (id) => {
    return knex('items')
        .select(['items.name','items.price','items.descriptions','items.allergens'])
        .where('id',id);
}
// //Insert new item information
// const createitem = (itemInfo) => {
//     return knex('items')
//         .insert({
//             name:       itemInfo.name,
//             itemId:     itemInfo.itemId,
//             password:   itemInfo.password,
//             email:      itemInfo.email
//         })
//         .then(result => {
//             return `Welcome ${itemInfo.name}! Your itemId '${itemInfo.itemId}' has been created`
//         })
//         .catch(err => {
//             return err.message;
//         })
// }
module.exports = {
    fetchItems,
    findItem
    // createitem
}