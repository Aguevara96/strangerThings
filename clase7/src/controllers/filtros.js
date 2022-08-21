let {SEL} = require('../utiles')

document.addEventListener('click', e => {
   switch (e.target.id) {
      case 'txtFirstName':
         console.log('txt firt name click')
         break;
      case 'btnBuscar':
         alert('guarda que aca recarga la pagina')
         e.preventDefault()
         break;
   }
})

SEL('txtFirstName').addEventListener('input', e => {
   console.log(e.target.value)
})