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
      case 'popupConfirmacionModificacion_OK':
         let arrKeys = [...document.getElementsByClassName('js-key-modifica')].map(z => z.innerText)
         let arrValues = [...document.getElementsByClassName('js-query-mod')].map(z => z.value)

         let objRes = {}

         for (let x = 0; x < arrKeys.length; x++) {
            objRes[arrKeys[x]] = arrValues[x]
         }

         console.log(objRes)
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
   if (e.target.classList.contains('js-btnModificar')) {
      console.log('primero obtengo el id')
      console.log(e.target.dataset.id)
      console.log('componer el className que serian todos los campos a modificar')
      let nomClassName = ['js-fila-', e.target.dataset.id].join('')
      console.log('Este es el nombre del classname')
      console.log(nomClassName)
      console.log('get elements por class name')
      let HTMLCOll = document.getElementsByClassName(nomClassName)[0]
      console.log(HTMLCOll)
      let arrCol = [...HTMLCOll.getElementsByClassName('js-modificable')]
      console.log(arrCol)
      let mapa = arrCol.map(z => { return {
         key: z.dataset.name,
         value: z.innerHTML
      }})
      console.log(mapa)

      for (let k of mapa) {
         let id = ['txtMod-', k.key].join('')
         document.getElementById(id).value = k.value
      }

      $('#popupConfirmacionModificacion').modal({
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