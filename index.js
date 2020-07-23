const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos

const cors = require('cors')

const url = `mongodb+srv://mhdbuser:admin123@cluster0-1epea.mongodb.net/expedients?retryWrites=true&w=majority`

// conectar mongo
mongoose.Promise = global.Promise
mongoose.connect(url, {
  useNewUrlParser: true,
})

// crear el servidor
const app = express()

// habilitar bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Habilitar cors
app.use(cors())

// Rutas de la app
app.use('/', routes())

// carpeta publica
app.use(express.static('uploads'))

// puerto
app.listen(5000)
