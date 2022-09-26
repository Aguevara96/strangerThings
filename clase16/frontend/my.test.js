let filtros = require('./src/services/filtros')

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
});


let arrOriginal = [
   { firstName: 'Alicia', city: 'La Rioja' },
   { firstName: 'Juanqui', city: 'Cordoba' },
   { firstName: 'Andy', city: 'Corrientes' }
]

test('voy a filtrar array por nombre', () => {
   let resultado = filtros.filtrarPorNombre(arrOriginal, 'A')
   console.log(resultado)
   expect(resultado.length).toBe(2)
})

test('voy a testear soo por ciudad', () => {
   let resultado = filtros.filtrarPorCity(arrOriginal, 'Cor')
   console.log(resultado)
   expect(resultado.length).toBe(2)
})

test('voy a testear por nombre y ciudad', () => {
   let resultado = filtros.filtrarPorNombreCiudad(arrOriginal, 'A', 'Cor')
   console.log(resultado)
   expect(resultado.length).toBe(1)
})


