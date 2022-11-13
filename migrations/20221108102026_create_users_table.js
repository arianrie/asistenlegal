/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('email');
    table.string('password');
    table.boolean('is_admin');
    table.timestamp(true, true);
    table.unique(['email','id']);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
