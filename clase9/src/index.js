let vistaUsuarios = require('./vistas/vistaUsuarios')
require('./controllers/filtros').init()
let generacionDatos = require('./services/generacionDatos')

let usuOrigs = generacionDatos.obtenerDatosOriginales()

vistaUsuarios()

fetch('/usuarios.json')
.then(z => z.json())
.then(datos => {
   datos.forEach(dato => {
      console.log(dato)
      console.log('-----------------------')
   })
})