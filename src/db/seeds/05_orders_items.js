exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders_items').insert([
        {
          order_id: 1,
          item_id: 4,
          quantity: 2
        },
        {
          order_id: 2,
          item_id: 1,
          quantity: 1
        },
        {
          order_id: 3,
          item_id: 6,
          quantity: 3
        }
      ]);
    });
};
