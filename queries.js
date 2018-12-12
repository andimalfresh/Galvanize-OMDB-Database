const db = require('./database-connection')
 module.exports = {
      listAll(){
          return db('movies')
      }
 } 