 exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', (table) =>{
        table.increments();
        table.integer('user_id')
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE');
        table.integer('restaurant_id')
          .notNullable()
          .references('id')
          .inTable('restaurants')
          .onDelete('CASCADE');
        table.integer('pretax');
        table.integer('tax');
        table.integer('tips');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');
};
