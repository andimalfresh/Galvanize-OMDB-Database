
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', movie => {
      movie.increments('id')
      movie.string('title')
      movie.string('dirctor')
      movie.string('year')
      movie.increments('your_rating')
      movie.string('poster_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
};
