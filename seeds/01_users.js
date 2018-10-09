exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          name: 'Sein', 
          userId: 'sein', 
          password: 'sein123', 
          email: 'sein@galvanize.com',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Mansoor', 
          userId: 'mansoor', 
          password: 'mansoor123', 
          email: 'mansoor@galvanize.com',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'John', 
          userId: 'john', 
          password: 'john123', 
          email: 'john@galvanize.com',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
