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
        },
        {
          order_id: 4,
          item_id: 10,
          quantity: 2
        },
        {
          order_id: 5,
          item_id: 14,
          quantity: 3
        },
        {
          order_id: 6,
          item_id: 15,
          quantity: 2
        },
        {
          order_id: 7,
          item_id: 6,
          quantity: 3
        },
        {
          order_id: 8,
          item_id: 11,
          quantity: 1
        },
        {
          order_id: 9,
          item_id: 9,
          quantity: 2
        },
        {
          order_id: 10,
          item_id: 13,
          quantity: 2
        },
        {
          order_id: 11,
          item_id: 12,
          quantity: 2
        },
        {
          order_id: 12,
          item_id: 7,
          quantity: 2
        },
        {
          order_id: 13,
          item_id: 12,
          quantity: 2
        }
      ]);
    });
};
