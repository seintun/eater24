const itemsQuery = require('../queries/items.query')
//calling Query to fetch list of items
const fetchItems = (restaurantId) => {
  let items = itemsQuery.fetchItems(restaurantId)

  return items.then(result => {
    return result.length < 1
      ? { error: 'error retrieving items', status: 404 }
      : result
  })
}
//calling Query to find specific menu item
const findItem = (itemId, restaurantId) => {
  let item = itemsQuery.findItem(itemId, restaurantId)

  return item.then(result => {
    return result.length < 1
      ? { error: 'error retrieving item', status: 404 }
      : result
  })
}
//calling Query to create menu items with args pass
const createItem = (itemInfo, restaurantId) => {
  let item = itemsQuery.createItem(itemInfo, restaurantId)

  return item.then(result => {
    return !result
      ? { error: 'error creating new item', status: 404 }
      : result
  })
}
//calling Query to update specific menu item
const editItem = (itemId, restaurantId, itemInfo) => {
  let item = itemsQuery.editItem(itemId, restaurantId, itemInfo)

  return item.then(result => {
    return result.length < 1
      ? { error: 'error editing item', status: 404 }
      : result
  })
}
//calling Query to delete specific menu item
const deleteItem = (itemId, restaurantId) => {
  let item = itemsQuery.deleteItem(itemId, restaurantId)

  return item.then(result => {
    return result.length < 1
      ? { error: 'error retrieving item', status: 404 }
      : result
  })
}
module.exports = {
  fetchItems,
  findItem,
  createItem,
  editItem,
  deleteItem
}