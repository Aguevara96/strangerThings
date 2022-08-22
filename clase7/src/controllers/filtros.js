let {SEL} = require('../utiles/utiles')

document.addEventListener('click', e => {
   switch (e.target.id) {
      case 'txtFirstName':
         console.log('txt firt name click')
         break;
      case 'btnBuscar':
         break
   }
})

SEL('txtFirstName').addEventListener('input', e => {
   console.log(e.target.value)
})

module.exports = {
   init: () => {}
}