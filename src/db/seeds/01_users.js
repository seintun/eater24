exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          name: 'Sein', 
          userId: 'sein', 
          password: 'galvanize123', 
          email: 'sein@galvanize.com'
        },
        {
          name: 'Mansoor', 
          userId: 'mansoor', 
          password: 'galvanize123', 
          email: 'mansoor@galvanize.com'
        },
        {
          name: 'John', 
          userId: 'john', 
          password: 'galvanize123', 
          email: 'john@galvanize.com'
        },
        {
          name: 'Mary', 
          userId: 'mary', 
          password: 'galvanize123', 
          email: 'mary@galvanize.com'
        },
        {
          name: 'Isabella', 
          userId: 'isabella', 
          password: 'galvanize123', 
          email: 'isabella@galvanize.com'
        }
      ]);
    });
};
