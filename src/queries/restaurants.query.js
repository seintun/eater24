const knex = require('./db')

//Query returns a list of restaurants details
const fetchRestaurants = () => {
    return knex('restaurants')
        .select(['restaurants.name','restaurants.address','restaurants.cuisine','restaurants.phone'])
        .orderBy('name', 'ASC');
}
//Query return a specified restaurant with restaurant & email
const findRestaurant = (id) => {
    return knex('restaurants')
        .select(['restaurants.name','restaurants.address','restaurants.cuisine','restaurants.phone'])
        .where('id',id);
}
// //Insert new restaurant information
// const createrestaurant = (restaurantInfo) => {
//     return knex('restaurants')
//         .insert({
//             restaurant: restaurantInfo.restaurant,
//             restaurantId:     restaurantInfo.restaurantId,
//             password:   restaurantInfo.password,
//             email:      restaurantInfo.email
//         })
//         .then(result => {
//             return `Welcome! Your restaurant '${restaurantInfo.name}' has been created`
//         })
//         .catch(err => {
//             return err.message;
//         })
// }
module.exports = {
    fetchRestaurants,
    findRestaurant
    // createRestaurant
}