let genUsuario = require('./lib/genusuario')
let {SEL} = require('./utiles')
let Mustache = require('mustache')

console.log(genUsuario())

/*
Los pasos son:

a) Armar el template HTML
b) Generar un array de usuarios random
c) Utilizar mustache para el render
*/

let tmpl = SEL('templateTablaUsuarios').innerHTML
let arrUsu = []

for (let z of Array(50)) {
   arrUsu.push(genUsuario())
}

let htmlOut = Mustache.render(tmpl, {grupoRep:arrUsu})

SEL('tabUsuarios').innerHTML = htmlOut