exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // This is to avoid any foreign key constraints.
  return knex('orders_items').del()
    .then(() => knex('orders').del())
    .then(() => knex('items').del())
    .then(() => knex('restaurants').del())
    .then(() => knex('users').del())
};
