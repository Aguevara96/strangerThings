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

let filtrarPorFirstname = (firstNameParam) => {

}


generarUsuarios()

module.exports = {
   obtenerDatosOriginales,
   filtrarPorFirstName
}