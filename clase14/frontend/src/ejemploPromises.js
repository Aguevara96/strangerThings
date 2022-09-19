let {SEL} = require('./utiles/utiles')

let incrementaContador = contador => {
   contador++
   SEL('txtCity').value = contador
   return contador
}

let funcionAsync = (contador, onFinish) => {
   contador = incrementaContador(contador)
   setTimeout(() => onFinish(contador), 2000)
}

let funcionSinc = contador => {
   return incrementaContador(contador)
   /*
   setTimeout(() => {
      SEL('txtFirstName').value = 'LLAMANDO A PROXY'
      setTimeout(() => {
         SEL('txtFirstName').value = ''
      }, 500)
   }, 500)
   */
}

/*
let wrapperFuncionAsync = () => {
   return new Promise((resolve, reject) => {
      funcionAsync(() => {
         resolve()
      })
   })
}
*/

funcionAsync(100, x => {
   console.log(x)
   x = funcionSinc(x)
   console.log(x)
   x = incrementaContador(x)
   console.log(x)
   funcionAsync(x, y => {
      console.log(y)
      y = funcionSinc(y)
      console.log(y)
      funcionAsync(y, z => {
         console.log(z)
         z = funcionSinc(z)
         console.log(z)
         SEL('txtFirstName').value = 'TERMINA EL EJEMPLO'
      })
   })
})

