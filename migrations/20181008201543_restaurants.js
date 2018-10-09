exports.up = function(knex, Promise) {
    return knex.schema.createTable('restaurants', (table) =>{
      table.increments();
      table.string('name').notNullable().defaultTo('');
      table.string('address').notNullable().defaultTo('');
      table.string('cuisine');
      table.string('phone');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurants');
  };
  