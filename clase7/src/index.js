require("./styles.css");
//require('./pruebaIdUsu')
//require('./controllers/filtros').init()
let generacionDatos = require('./generacionDatos')

let usuOrigs = generacionDatos.obtenerDatosOriginales()

console.log(usuOrigs)
