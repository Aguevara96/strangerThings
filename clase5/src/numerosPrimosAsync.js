let esPrimo = require('./esPrimo')
let asyncForLoop = require('@arteysoft/asyncforloop')
let {SEL} = require('./utiles')

let arrPrimos = [2]

let mostrarLosPrimosDescubiertos = () => {
   SEL('txtContador').innerHTML = arrPrimos.join(', ')
}

let funcionPrincipal = () => {
   asyncForLoop(1000, (discover, next) => {
      if (discover < 3) {
         next()
         return
      }
      if (esPrimo(discover, arrPrimos)) {
         arrPrimos.push(discover)
         mostrarLosPrimosDescubiertos()
      }
      setTimeout(next, 100)
   }, () => {
      // termina el ciclo
   })
}

module.exports = {
   init: funcionPrincipal
}