let genUsuario = require('./lib/genusuario')

let arrUsu = []

let generarUsuarios = () => {
   for (let z of Array(50)) {
      arrUsu.push(genUsuario())
   }
}

let obtenerDatosOriginales = () => {
   return arrUsu
}

let filtrarPorFirstName = firstNameParam => {
   return arrUsu.filter(z =>
      z.firstName.indexOf(firstNameParam) === 0
   )
}

window.test = filtrarPorFirstName

generarUsuarios()

module.exports = {
   obtenerDatosOriginales,
   filtrarPorFirstName
}