exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        { id: 1, 
          name: 'Birdsong', 
          address: '1085 Mission St, San Francisco, CA 94103', 
          cuisine: 'American', 
          phone: '4153699161'},
        { id: 2, 
          name: 'Gary Danko', 
          address: '800 N Point St, San Francisco, CA 94109', 
          cuisine: 'French', 
          phone: '4157492060'},
        { id: 3, 
          name: 'Omakase', 
          address: '665 Townsend St, San Francisco, CA 94103', 
          cuisine: 'Japanese', 
          phone: '4158650633'},
      ]);
    });
};
