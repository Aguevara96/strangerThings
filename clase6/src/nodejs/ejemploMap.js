let arrObj = [{
   firstName: "Toby",
   id: "445cae74-98b9-48c6-b14b-5d8e984ba960",
   lastName: "Bogisich"
},
{
   firstName: "Alexys",
   id: "05953f96-7f3a-45cc-bb06-c97c15e602c8",
   lastName: "Kiehn"
}]

let arrMapeado = arrObj.map(z => {
   return {
      primerCaracter: [z.lastName, z.firstName].join(', ').charAt(0),
      original: z,
      claves: Object.keys(z)
   }
})

let arrFiltrado = arrObj.filter(z => {
   return Object.keys(z).length === 3
})


console.log(arrFiltrado)

