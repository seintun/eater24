const fetchOrders = (req, res, next) => {
    res.send(`GET ALL: You are hitting the collection of Orders page!`)
}
// const getOrder = (req, res, next) => {
//     res.send(`GET ONE: You are hitting the Order page!`)
// }
// const createOrder = (req, res, next) => {
//     res.send(`POST: You are creating the Order page!`)
// }
// const editOrder = (req, res, next) => {
//     res.send(`PUT: You are editing the Order page!`)
// }
// const deleteOrder = (req, res, next) => {
//     res.send(`DELETE: You are deleting the Order page!`)
}
module.exports = {fetchOrder};
// module.exports = {getOrder};
// module.exports = {createOrder};
// module.exports = {editOrder};
// module.exports = {deleteOrder};