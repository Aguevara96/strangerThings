let {SEL} = require('../utiles/utiles')

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

SEL('txtFirstName').addEventListener('input', e => {
   console.log(e.target.value)
})

module.exports = {
   init: () => {}
}