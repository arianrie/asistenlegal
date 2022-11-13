/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('clients',function(table){
    table.increments('id');
    table.string('name');
    table.date('birthday');
    table.string('place_of_birth');
    table.string('address');
    table.integer('phone_number');
    table.string('email');
    table.integer('no_npwp');
    table.integer('no_ktp');
    table.integer('no_kk');
    table.string('company_name');
    table.string('company_address');
    table.integer('company_capital');
    table.string('type_of_business');
    table.boolean('in_proses');
    table.timestamp(true,true);
    table.unique(['id']);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('clints');
};
