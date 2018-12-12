const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require ('body-parser')
const port = process.env.PORT || 4000
const queries = require('./queries')


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) => {
    queries.listAll().then(movies => res.json(movies))
})

app.listen(port, console.log(`We are going deep on PORT: ${port}`))