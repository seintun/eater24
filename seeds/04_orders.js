exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { id: 1,
          users_id: 2, 
          restaurants_id: 2,
          pretax: '27', 
          tax: '15',
          tips: '8'},
        { id: 2,
          users_id: 1, 
          restaurants_id: 1,
          pretax: '43', 
          tax: '24',
          tips: '10'},
        { id: 3,
          users_id: 3, 
          restaurants_id: 2,
          pretax: '51', 
          tax: '23',
          tips: '18'},
      ]);
    });
};
