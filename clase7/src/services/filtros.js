
let filtrarPorNombre = (arr, nombre) => {
   let ret = arr.filter(z => z.firstName.indexOf(nombre) === 0)
   return ret
}

module.exports = {
   filtrarPorNombre
}