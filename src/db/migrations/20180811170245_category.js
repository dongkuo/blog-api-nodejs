
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
    table.string('url')
    table.integer('order_weight')
    table.datetime('create_time').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category');
}
