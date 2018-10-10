const fetchRestaurants = (req, res, next) => {
    res.send(`GET ALL: You are hitting the collection of Restaurants page!`)
}
// const getRestaurant = (req, res, next) => {
//     res.send(`GET ONE: You are hitting the Restaurant page!`)
// }
// const createRestaurant = (req, res, next) => {
//     res.send(`POST: You are creating the Restaurant page!`)
// }
// const editRestaurant = (req, res, next) => {
//     res.send(`PUT: You are editing the Restaurant page!`)
// }
// const deleteRestaurant = (req, res, next) => {
//     res.send(`DELETE: You are deleting the Restaurant page!`)
// }
module.exports = {fetchRestaurants};
// module.exports = {getRestaurant};
// module.exports = {createRestaurant};
// module.exports = {editRestaurant};
// module.exports = {deleteRestaurant};