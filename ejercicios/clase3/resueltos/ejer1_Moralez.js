let arrPrimos = [2]

let esDivisible = (dividendo, divisor) => ((dividendo % divisor) === 0)

let esPrimo = (num, arr) => {
   for (let i of arrPrimos) {
      if (esDivisible(num, i)) {
          return false
          // de esta forma queda descartado...
      }
   }
   return true;
   // si pasa todas las pruebas de NO divisibilidad es primo
}

for (let discover = 3; discover <= 100 ; discover++) {
   if (esPrimo(discover, arrPrimos)) {
      arrPrimos.push(discover)
   }
}

console.log('Numero primos del 2 al 100')
console.log(arrPrimos)