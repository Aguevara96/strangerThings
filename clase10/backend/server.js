const express = require('express')
const genUsuario = require('./lib/genusuario')
const {RecursoAgregado, BadRequestError, NotFound, InternalServerError} = require('./lib/codigosHTTP')
const _ = require('underscore')

const app = express()

let arrUsuarios = _.map(Array(5), () => genUsuario())

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.use(express.json());

app.get('/verificar', (request, response) => {
   response.status(200).send('Endpoint verificado !!!')
})

app.get('/api/usuario', (request, response) => {
   response.setHeader('Content-Type', 'application/json');
   response
      .status(200)
      .end(JSON.stringify(arrUsuarios))
})

app.delete('/api/usuario/:id', (request, response) => {
   let id = request.params.id
   arrUsuarios = arrUsuarios.filter(z => z.id !== id)
   response
      .status(200)
      .end(JSON.stringify({resultado:'OK'}))
})

app.listen(3000, err => {
   console.log('escuchando el puerto 3000')
})