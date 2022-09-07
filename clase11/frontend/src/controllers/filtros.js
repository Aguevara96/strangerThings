let {SEL, formToObject} = require('../utiles/utiles')
let _ = require('underscore')
let proxy = require('../proxies/miProxy')

document.addEventListener('click', e => {
   switch (e.target.id) {
      case 'txtFirstName':
         console.log('txt firt name click')
         break
      case 'btnBuscar':
         {
         e.preventDefault()
         let filtros = {
            firstName : SEL('txtFirstName').value,
            city : SEL('txtCity').value
         }
         let evt = new CustomEvent('EVT_BUSCAR_USURIO', { detail: filtros })
         document.dispatchEvent(evt)
         }
         break
      case 'popupConfirmacionBorrado_OK':
         {
         let id = window.pantallaPrincipal.ultimoEvento.detail
         let evt = window.pantallaPrincipal.ultimoEvento
         proxy.borrarUnUsuario(
            id,
            () => {
               document.dispatchEvent(evt)
            },
            e => {
               alert('NO SE PUDO REALIZAR EL BORRADO - HACERLO CON BOOTSTRAP')
            })
         }
         break
   }
})

document.addEventListener('click', e => {
   if (e.target.classList.contains('js-btnBorrar')) {
      let evt = new CustomEvent(
         'EVT_BORRAR_USUARIO', {
            detail : e.target.dataset.id
         }
      )

      window.pantallaPrincipal.ultimoEvento = evt

      $('#popupConfirmacionBorrado').modal({
         show: true
      });

   }
})

document.addEventListener('input', e => {
   let obj = formToObject('js-query')
   let evt = new CustomEvent('EVT_BUSCAR_USURIO', { detail: obj })
   document.dispatchEvent(evt)
})


module.exports = {
   init: () => {}
}