exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', (table)=> {
      table.increments();
      table.integer('restaurant_id')
          .notNullable()
          .references('id')
          .inTable('restaurants')
      table.string('name').notNullable().defaultTo('');
      table.integer('price').notNullable().defaultTo(0);
      table.string('descriptions');
      table.string('allergens');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('items');
  };
  