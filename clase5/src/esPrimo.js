let esDivisible = (dividendo, divisor) => ((dividendo % divisor) === 0)

let esPrimo = (num, arr) => {
   for (let i of arr) {
      if (esDivisible(num, i)) {
          return false
          // de esta forma queda descartado...
      }
   }
   return true;
   // si pasa todas las pruebas de NO divisibilidad es primo
}

module.exports = esPrimo