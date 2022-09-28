let genUsuario = require('../lib/genusuario')
let {SEL, renderGrupoRep} = require('../utiles/utiles')
let Mustache = require('mustache')
let filtros = require('../services/filtros')
let proxy = require('../proxies/miProxy')

let arrUsu = []

let display = xs => renderGrupoRep('templateTablaUsuarios', xs, 'tabUsuarios')

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

// Agregar un evento que llame a display con el arrUsu
// en realidad si llama a render ya esta solucionado
// porque render va a proxy trae todo y hace el display
// EVT_REFRESH

module.exports = render