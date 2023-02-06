const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => res.render('index'))

routes.get('/dashboard', (req, res) => res.render('pages/dashboard.ejs'))
routes.get('/pets', (req, res) => res.render('pages/pets.ejs'))
routes.get('/clientes', (req, res) => res.render('pages/clientes.ejs'))
routes.get('/vets', (req, res) => res.render('pages/vets.ejs'))
routes.get('/ajustes', (req, res) => res.render('pages/ajustes.ejs'))

module.exports = routes
