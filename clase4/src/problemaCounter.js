let {SEL} = require('./utiles')

let counter = () => {
   for (let x = 1; x <= 500000; x++) {
      console.log(x)
      SEL('txtContador').innerHTML = x
   }
}

module.exports = counter