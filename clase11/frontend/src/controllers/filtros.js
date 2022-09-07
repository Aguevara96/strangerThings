let {SEL, formToObject} = require('../utiles/utiles')
let _ = require('underscore')

document.addEventListener('click', e => {
   switch (e.target.id) {
      case 'txtFirstName':
         console.log('txt firt name click')
         break
      case 'btnBuscar':
         e.preventDefault()
         let filtros = {
            firstName : SEL('txtFirstName').value,
            city : SEL('txtCity').value
         }
         let evt = new CustomEvent('EVT_BUSCAR_USURIO', { detail: filtros })
         document.dispatchEvent(evt)
         break
   }
})

document.addEventListener('click', e => {
   if (e.target.classList.contains('js-btnBorrar')) {
      let evt = new CustomEvent(
         'EVT_BORRAR_USUARIO', {
            detail : e.target.dataset.id
         })

      // Esta bien, generar el evento EVT_BORRAR_USUARIO
      // Pero no tendriamos que hacer el dispatch hasta tanto
      // No tengamos la certeza que se borro del lado del
      // server.
      // Como ejercicio llamar al proxy y esperar la respuesta
      // luego recien hacer el dispatch.

      document.dispatchEvent(evt)
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