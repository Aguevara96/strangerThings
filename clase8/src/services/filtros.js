
let filtrarPorNombre = (arr, nombre) => {
   let ret = arr.filter(z => z.firstName.indexOf(nombre) === 0)
   return ret
}

let filtrarPorCity = (arr, ciudad) => {
   let ret = arr.filter(z => z.city.indexOf(ciudad) === 0)
   return ret
}

let filtrarPorNombreCiudad = (arr, nombre, ciudad) => {
   let r1 = filtrarPorNombre(arr, nombre)
   let r2 = filtrarPorCity(r1, ciudad)
   return r2
}

let removerPorId = (arr, id) => arr.filter(z => z.id !== id)

module.exports = {
   filtrarPorNombre,
   filtrarPorCity,
   filtrarPorNombreCiudad,
   removerPorId
}