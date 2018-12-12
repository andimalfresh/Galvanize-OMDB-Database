const db = require('./database-connection')
 module.exports = {
      listAll(){
          return db('movies')
      },
      getById(){
          return db('movies').where(id, 'id')
      },
      createMovie(newMovie){
          return db('movies').insert(newMovie)
          .returning('*')
      },
      deleteMovie(id){
          return db('movies').where('id', id).delete()
      },
      updateMovie(id, movie){
          return db('movie').where('id', id).update(movie).returning('*')
      }

 } 