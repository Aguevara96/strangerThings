let guia = require('./guia')
let {SEL} = require('../utiles/utiles')
let Mustache = require('mustache')

nodoActual = 0

let controller = () => {
    document.addEventListener('click', e => {
        if (e.target.id === 'btnOpcionesSiguiente') {
            let indiceSeleccionado = SEL('opcionesScript').selectedIndex
            let {enlace} = guia[nodoActual].salidas[indiceSeleccionado]            
            // Segun que salida se eligio, voy a tener que buscarlo -el id-, dentro de la guia
            // hacer un filter para encontrar ese elemento, si no lo encuentro ALERT !!!!  
            let nuevoIndex = guia.findIndex(z => z.id === enlace)
            if (nuevoIndex === -1) {
                alert("Atencion, no se encontro el enlace: " + enlace)
            }
            nodoActual = nuevoIndex
            init()
        }
    })
}

let init = () => {
    SEL('scriptPrompt').innerHTML = guia[nodoActual].prompt

    let tmpl = '{{#salidas}}<option>{{texto}}</option>{{/salidas}}'
    let output = Mustache.render(tmpl, guia[nodoActual])
    SEL('opcionesScript').innerHTML = output

}

module.exports = () => {
    controller()
    init()
}