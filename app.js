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
app.get('/:id', (req,res) => {
    queries.listById(req.params.id).then(movies => res.json(movies))
})
app.post('/', (req, res) => {
    queries.createMovie(req.body).then(movies => res.send(movies))
})
app.delete('/:id', (req,res) => {
    queries.deleteMovie(req.params.id).delete().then(res.sendStatus(204))
})
app.put('/:id', (req,res) => {
    queries.updateMovie(req.params.id, req.body).then(movies => res.json(movies))
})
app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err})
})
app.listen(port, console.log(`We are going deep on PORT: ${port}`))