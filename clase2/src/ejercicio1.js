import {SEL} from './utiles'

let incrementarDisplay = cantidad => {
   let enStr = SEL('txtDisplay').value
   let enInt = parseInt(enStr)
   enInt = enInt + cantidad
   SEL('txtDisplay').value = enInt
}

document.addEventListener('click', e => {
   // console.log(e.target.id)
   if (e.target.id === 'btnIncrementar') {
      incrementarDisplay(2)
   }
})

export default {}