let genUsuario = require('../lib/genusuario')
let {SEL} = require('../utiles/utiles')
let Mustache = require('mustache')
let filtros = require('../services/filtros')
let proxy = require('../proxies/miProxy')

let arrUsu = []

let display = (arrToRender) => {
   let tmpl = SEL('templateTablaUsuarios').innerHTML
   let htmlOut = Mustache.render(tmpl, {grupoRep:arrToRender})
   SEL('tabUsuarios').innerHTML = htmlOut
}

let render = (arrToRender = arrUsu) => {
   proxy.traerTodosLosUsuarios(data => {
      arrUsu = data
      display(arrUsu)
   }, e => {
      console.log(e)
      alert(e)
   })
}

document.addEventListener('EVT_BUSCAR_USURIO', e => {
   let filtered =
      filtros.filtrarPorNombreCiudad(arrUsu,
                              e.detail.firstName,
                              e.detail.city)

   console.log()
   display(filtered)
})

document.addEventListener('EVT_BORRAR_USUARIO', e => {
   console.log(e)
   arrUsu = filtros.removerPorId(arrUsu, e.detail)
   display(arrUsu)
   $('#popupConfirmacionBorrado').modal('hide');
})

module.exports = render