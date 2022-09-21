
let filtrarArrComienzaCon = (arr, nomKey, token) => {
   let tokenLowerCase = token.toLowerCase()
   return arr.filter(z => z[nomKey].toLowerCase().indexOf(tokenLowerCase) === 0)
}

let filtrarPorNombre = (arr, nombre) => filtrarArrComienzaCon(arr, 'firstName', nombre)
let filtrarPorCity = (arr, ciudad) => filtrarArrComienzaCon(arr, 'city', ciudad)

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