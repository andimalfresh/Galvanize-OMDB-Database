const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require ('body-parser')
const port = process.env.PORT || 4000


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('YEAHHHH BOII !!')
})

app.listen(port, console.log(`We are going deep on PORT: ${port}`))