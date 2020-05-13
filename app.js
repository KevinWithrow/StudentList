var knex = require('knex')({
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      user: 'kevinwithrow',
      password: '123jordan',
      database: 'StudentList'
    },
    // useNullAsDefault: true
  });

  var pg = require('knex')({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
  });