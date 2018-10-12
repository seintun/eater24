exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          user_id: 2, 
          restaurant_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 1, 
          restaurant_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 3, 
          restaurant_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
