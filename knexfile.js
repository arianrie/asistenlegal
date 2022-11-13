// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'asistenlegal',
      port: '3306',
      password: 'asistenlegal',
      database: 'asistenlegal'
      }
  }
};
