const knex = require('./db')

//Query returns a list of restaurants details
const fetchRestaurants = () => {
    return knex('restaurants')
        .select(['restaurants.id','restaurants.name','restaurants.address','restaurants.cuisine','restaurants.phone'])
        .orderBy('name', 'ASC');
}
//Query return a specified restaurant with restaurant & email
const findRestaurant = (id) => {
    return knex('restaurants')
        .select(['restaurants.id','restaurants.name','restaurants.address','restaurants.cuisine','restaurants.phone'])
        .where('id',id);
}
//Insert new restaurant information
const createRestaurant = (restaurantInfo) => {
    return knex('restaurants')
        .insert({
            name:       restaurantInfo.name,
            address:    restaurantInfo.address,
            cuisine:   restaurantInfo.cuisine,
            phone:      restaurantInfo.phone
        })
        .then(result => {
            return `Welcome! Your restaurant '${restaurantInfo.name}' has been created`
        })
        .catch(err => {
            return err.message;
        })
}
//Update existing restaurant information
const editRestaurant = (restaurantId, restaurantInfo) => {
    return knex('restaurants')
        .where('id', restaurantId)
        .update({
            id:         restaurantId,
            name:       restaurantInfo.name,
            address:    restaurantInfo.address,
            cuisine:    restaurantInfo.cuisine,
            phone:      restaurantInfo.phone
        })
        .then(result => {
            return `Welcome! Your restaurant '${restaurantInfo.name}' has been updated`
        })
        .catch(err => {
            return err.message;
        })
}
const deleteRestaurant = (id) => {
    return knex('restaurants')
        .where('id',id)
        .del();
}
module.exports = {
    fetchRestaurants,
    findRestaurant,
    createRestaurant,
    editRestaurant,
    deleteRestaurant
}