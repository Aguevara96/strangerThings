let esPrimo = require('./src/esPrimo')

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
});

test('voy a testear que un numero sea primo segun arr', () => {
   let encontrado = esPrimo(11, [2, 3, 5, 7])
   expect(encontrado).toBe(true)
})

