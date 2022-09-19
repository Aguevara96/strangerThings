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

let wrapperAsync = contador => {
   return new Promise((resolve) => {
      funcionAsync(contador, cont => {
         resolve(cont)
      })
   })
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

let crearPromiseInicial = valorInicial => {
   return new Promise((resolve) => {
      resolve(valorInicial)
   })
}

crearPromiseInicial(500)
.then(z => wrapperAsync(z))
.then(z => incrementaContador(z))
.then(z => wrapperAsync(z))
.then(z => funcionSinc(z))
.then(z => wrapperAsync(z))
.then(z => {
   SEL('txtFirstName').value = 'TERMINA EL UNO'
   return z
})
.then(z => wrapperAsync(z))
.then(z => funcionSinc(z))
.then(z => {
   SEL('txtFirstName').value = 'TERMINA EL DOS'
   return z
})
.catch(err => {})

/* LO DEJO COMO REFERENCIA
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
*/
