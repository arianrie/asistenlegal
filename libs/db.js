const knex = require('knex')({
client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'asistenlegal',
      password: 'asistenlegal',
      database: 'asistenlegal'
    }
})

export default knex;
