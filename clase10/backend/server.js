const express = require('express')
const genUsuario = require('./lib/genusuario')
const {RecursoAgregado, BadRequestError, NotFound, InternalServerError} = require('./lib/codigosHTTP')
const _ = require('underscore')

const app = express()

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.use(express.json());

app.get('/verificar', (request, response) => {
   response.status(200).send('Endpoint verificado !!!')
})

app.listen(3000, err => {
   console.log('escuchando el puerto 3000')
})