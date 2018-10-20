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
module.exports = {
    fetchRestaurants,
    findRestaurant,
    createRestaurant
}