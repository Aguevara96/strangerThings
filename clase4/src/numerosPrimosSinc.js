let esPrimo = require('./esPrimo')

let arrPrimos = [2]

let funcionPrincipal = () => {
   for (let discover = 3; discover <= 100 ; discover++) {
      if (esPrimo(discover, arrPrimos)) {
         arrPrimos.push(discover)
      }
   }

   console.log('Numero primos del 2 al 100')
   console.log(arrPrimos)
}

module.exports = {
   funcionPrincipal,
   esPrimo
}