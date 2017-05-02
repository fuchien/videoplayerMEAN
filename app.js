const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const db = require('./config/database')

const api = require('./server/routes/api')

const port = process.env.PORT || 3000

const app = express()


console.log(db.database)
mongoose.Promise = global.Promise
mongoose.connect(db.database, (err) => {
    if (err) {
        console.error('Error! ' + err)
    }
})

console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', api)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})