exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, 
          name: 'Sein', 
          userId: 'sein', 
          password: 'sein123', 
          email: 'sein@galvanize.com'},
        { id: 2, 
          name: 'Mansoor', 
          userId: 'mansoor', 
          password: 'mansoor123', 
          email: 'mansoor@galvanize.com'},
        { id: 3, 
          name: 'John', 
          userId: 'john', 
          password: 'john123', 
          email: 'john@galvanize.com'}
      ]);
    });
};
