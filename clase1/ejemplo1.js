let funcionConParams = (unString, unInteger, fn) => {
   console.log(`un string ${unString} y un integer ${unInteger}`)
   fn()
}

let funcionPasarPorParametro = () => {
   console.log('Estoy en la funcion que se paso por parametro')
}

funcionConParams('hola', 30, funcionPasarPorParametro)


