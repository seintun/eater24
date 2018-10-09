exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders_items', (table) =>{
        table.increments();
        table.integer('order_id')
          .notNullable()
          .references('id')
          .inTable('orders');
        table.integer('item_id')
          .notNullable()
          .references('id')
          .inTable('items');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders_items');
};
