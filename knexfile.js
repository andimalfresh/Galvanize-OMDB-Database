

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/omdb_db'
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
