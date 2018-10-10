const fetchItems = (req, res, next) => {
    res.send(`GET ALL: You are hitting the collection of Items page!`)
}
// const getItem = (req, res, next) => {
//     res.send(`GET ONE: You are hitting the Item page!`)
// }
// const createItem = (req, res, next) => {
//     res.send(`POST: You are creating the Item page!`)
// }
// const editItem = (req, res, next) => {
//     res.send(`PUT: You are editing the Item page!`)
// }
// const deleteItem = (req, res, next) => {
//     res.send(`DELETE: You are deleting the Item page!`)
}
module.exports = {fetchItems};
// module.exports = {getItem};
// module.exports = {createItem};
// module.exports = {editItem};
// module.exports = {deleteItem};