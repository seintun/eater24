exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders_items', (table) =>{
        table.increments();
        table.integer('orders_id')
          .notNullable()
          .references('id')
          .inTable('orders');
        table.integer('items_id')
          .notNullable()
          .references('id')
          .inTable('items');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders_items');
};
