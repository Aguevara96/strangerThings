let vistaUsuarios = require('./vistas/vistaUsuarios')
require('./controllers/inputController').init()
let generacionDatos = require('./services/generacionDatos')
require('./services/estructuraMemoria').init()
require('./componenteScriptCC/init').init()

let usuOrigs = generacionDatos.obtenerDatosOriginales()

vistaUsuarios()
