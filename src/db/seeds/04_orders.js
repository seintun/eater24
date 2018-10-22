exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          user_id: 2, 
          restaurant_id: 2
        },
        {
          user_id: 1, 
          restaurant_id: 1
        },
        {
          user_id: 3, 
          restaurant_id: 2
        }
      ]);
    });
};
