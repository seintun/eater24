const itemsQuery = require('../queries/items.query')

const fetchItems = () => {
  let items = itemsQuery.fetchItems()

  return items.then(result => {
    return result.length < 1
      ? { error: 'error retrieving items', status: 404 }
      : result
  })
}
const findItem = (id) => {
  let item = itemsQuery.findItem(id)

  return item.then(result => {
    return result.length < 1
      ? { error: 'error retrieving item', status: 404 }
      : result
  })
}
// const createitem = (itemInfo) => {
//   let item = itemsQuery.createitem(itemInfo)

//   return item.then(result => {
//     return !result
//       ? { error: 'error creating new item', status: 404 }
//       : result
//   })
// }
module.exports = {
  fetchItems,
  findItem
//   createitem
}