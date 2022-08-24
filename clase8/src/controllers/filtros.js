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
      // armar el evento para disparar
      // let evt = new CustomEvent
      // document.dispachEvent
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