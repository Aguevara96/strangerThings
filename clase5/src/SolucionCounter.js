let {SEL} = require('./utiles')
let asyncForLoop = require('@arteysoft/asyncforloop')

let solucionCounter = () => {
   asyncForLoop(5000, (idx, next) => {
      console.log('Estoy en el callback de la primer funcion... ', idx)
      SEL('txtContador').innerHTML = idx + 1
      next()
   }, () => {
      console.log('Termino de procesar todos los numeros del bucle')
      haceAlgoImportante()
   })
}

let haceAlgoImportante = () => {
   SEL('txtContador').innerHTML = 'Luego de haber procesado ...'
   alert('estoy en hacerAlgoImportante');
}

module.exports = solucionCounter