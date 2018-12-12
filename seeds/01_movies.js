
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Appaloosa', director:'Ed Harris', year: '2008', your_rating: '5', poster_url:'https://m.media-amazon.com/images/M/MV5BMTMxMDE5NDIxM15BMl5BanBnXkFtZTcwNjI0MjQ4MQ@@._V1_.jpg'},
        {id: 2, title: 'Unforgiven', director:'Clint Eastwood', year: '1992', your_rating: '4', poster_url:'https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg'},
        {id: 3, title: 'Tombstone', director:'George P. Cosmatos', year: '1993', your_rating: '5', poster_url:'https://m.media-amazon.com/images/M/MV5BODRkYzA4MGItODE2MC00ZjkwLWI2NDEtYzU1NzFiZGU1YzA0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'},
      ]);
    });
};

