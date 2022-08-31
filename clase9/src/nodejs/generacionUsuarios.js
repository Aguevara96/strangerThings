let genUsuario = require('../lib/genusuario')

let arrUsu = []

for (let z of Array(50)) {
   arrUsu.push(genUsuario())
}

console.log(JSON.stringify(arrUsu))

