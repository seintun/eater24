exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {
          name: 'Birdsong', 
          address: '1085 Mission St, San Francisco, CA 94103', 
          cuisine: 'American', 
          phone: '4153699161',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Gary Danko', 
          address: '800 N Point St, San Francisco, CA 94109', 
          cuisine: 'French', 
          phone: '4157492060',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Omakase', 
          address: '665 Townsend St, San Francisco, CA 94103', 
          cuisine: 'Japanese', 
          phone: '4158650633',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
