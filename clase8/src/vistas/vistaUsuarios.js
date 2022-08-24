let genUsuario = require('../lib/genusuario')
let {SEL} = require('../utiles/utiles')
let Mustache = require('mustache')
let filtros = require('../services/filtros')

/*
Los pasos son:

a) Armar el template HTML
b) Generar un array de usuarios random
c) Utilizar mustache para el render
*/

let arrUsu = []

{
   for (let z of Array(50)) {
      arrUsu.push(genUsuario())
   }
}

let render = (arrToRender = arrUsu) => {
   let tmpl = SEL('templateTablaUsuarios').innerHTML

   let htmlOut = Mustache.render(tmpl, {grupoRep:arrToRender})

   SEL('tabUsuarios').innerHTML = htmlOut
}

document.addEventListener('EVT_BUSCAR_USURIO', e => {
   let filtered =
      filtros.filtrarPorNombreCiudad(arrUsu,
                              e.detail.firstName,
                              e.detail.city)

   console.log()
   render(filtered)
})

document.addEventListener('EVT_BORRAR_USUARIO', e => {
   console.log(e)
   arrUsu = filtros.removerPorId(arrUsu, e.detail)
   render(arrUsu)
})

module.exports = render