let Mustache = require('Mustache')

let tmpl = 'Aca vamos a tener un template HTML <h1>{{nombre}}</h1>'
tmpl += '<hr />'
tmpl += '{{#grupoRep}}'
tmpl += 'para la fila el nombre {{nombre}}'
tmpl += '<hr />'
tmpl += '{{/grupoRep}}'


let datos = {
   nombre: 'Silvia',
   grupoRep: [
      {nombre: 'Silvia'},
      {nombre: 'Dani'},
      {nombre: 'Serra'}
   ]
}

let out = Mustache.render(tmpl, datos)

console.log(out)




