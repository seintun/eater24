exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders_items').insert([
        { id: 1,
          orders_id: 1,
          items_id: 4},
        { id: 2,
          orders_id: 2,
          items_id: 1},
        { id: 3,
          orders_id: 3,
          items_id: 6}
      ]);
    });
};
