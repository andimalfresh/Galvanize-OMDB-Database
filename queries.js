const db = require('./database-connection')
 module.exports = {
      listAll(){
          return db('movies')
      },
      getById(id){
          return db('movies').where('id', id).first()
      },
      createMovie(movie){
          return db('movies').insert(movie).returning('*')
      },
      deleteMovie(id){
          return db('movies').where('id', id).delete()
      },
      updateMovie(id, movie){
          return db('movies').where('id', id).update(movie).returning('*')
      }

 } 