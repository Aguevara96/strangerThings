let genUsuario = require('../lib/genusuario')

let arrUsu = []

for (let z of Array(50)) {
   arrUsu.push(genUsuario())
}

arrUsu = Array(50).map(z => genUsuario())

console.log(JSON.stringify(arrUsu))

