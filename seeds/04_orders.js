exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { id: 1,
          user_id: 2, 
          restaurant_id: 2,
          pretax: '27', 
          tax: '15',
          tips: '8'},
        { id: 2,
          user_id: 1, 
          restaurant_id: 1,
          pretax: '43', 
          tax: '24',
          tips: '10'},
        { id: 3,
          user_id: 3, 
          restaurant_id: 2,
          pretax: '51', 
          tax: '23',
          tips: '18'}
      ]);
    });
};
