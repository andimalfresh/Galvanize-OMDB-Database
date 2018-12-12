
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', movie => {
      movie.increments('id')
      movie.string('title')
      movie.string('director')
      movie.string('year')
      movie.integer('your_rating')
      movie.string('poster_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
};
