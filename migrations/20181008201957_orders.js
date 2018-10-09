 exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', (table) =>{
        table.increments();
        table.integer('users_id')
          .notNullable()
          .references('id')
          .inTable('users');
        table.integer('restaurants_id')
          .notNullable()
          .references('id')
          .inTable('restaurants');
        table.integer('pretax');
        table.integer('tax');
        table.integer('tips');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');
};
