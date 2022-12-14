let {SEL} = require('../utiles/utiles')
let Mustache = require('mustache')
let guiaLocal = require('./guia')
let optionStacker = require('./optionStacker')

nodoActual = 0
let guia = null

let selectedIndexCopy = null // Esto es para optimizar el tiempo de respuesta
                             // Guardo una copia en memoria del ultimo selected index

let controller = () => {
    document.addEventListener('click', e => {
        if (e.target.id === 'btnOpcionesSiguiente') {
            let indiceSeleccionado = selectedIndexCopy
            let {enlace} = guia[nodoActual].salidas[indiceSeleccionado]
            // Segun que salida se eligio, voy a tener que buscarlo -el id-, dentro de la guia
            // hacer un filter para encontrar ese elemento, si no lo encuentro ALERT !!!!  
            let nuevoIndex = guia.findIndex(z => z.id === enlace)
            if (nuevoIndex === -1) {
                alert("Atencion, no se encontro el enlace: " + enlace)
            }
            optionStacker.pushStack(nodoActual)
            nodoActual = nuevoIndex
            fnRecursiva()
        }
        if (e.target.id === 'btnAnterior') {
            if (optionStacker.isEmpty()) {
                return
            }
            nodoActual = optionStacker.popStack()
            fnRecursiva()
        }
    })
    document.addEventListener('change', e => {
        selectedIndexCopy = e.target.selectedIndex    
        console.log(selectedIndexCopy)
    })
}

let fnRecursiva = () => {
    SEL('scriptPrompt').innerHTML = guia[nodoActual].prompt

    let tmpl = '{{#salidas}}<option>{{texto}}</option>{{/salidas}}'
    let output = Mustache.render(tmpl, guia[nodoActual])
    SEL('opcionesScript').innerHTML = output
    selectedIndexCopy = 0
}

let cargarGuia = (onFinish) => {
    fetch('guia.json')
    .then(z => z.json())
    .then(z => { 
        onFinish(z)
    })
    .catch(e => {
        alert(e.message)
    })
}

let init = () => {
    cargarGuia(z => {
        guia = guiaLocal
        window.guia = guia
        controller()
        fnRecursiva()
    })
}

module.exports = init

/*
Como armar una estructura de pila para ir volviendo hacia atraz y 
Una estructura de pila
[nodo1, nodo5, nodo2, nodo8]
las funciones son: 
push es para agregar un nodo que estoy recorriendo
peek es para ver el ultimo nodo
pop es para remover el ultimo y poder hacer peek en el que ahora es el ultimo
luego si avanzo es push
si sigo retrocediendo es pop

Esta pila se implementa con un simple array y con algunos metodos

------------------------------------------------------------------------

Quiero que piensen esto.

Que hacemos nosotros ?

atrapamos el boton de siguiente, y leemos el selectedIndex para que ver que opcion
esta seleccionada.

Como lo hace react ?

Atrapa tambien el boton de siguiente, pero antes, va atrapando todos los eventos.
Entonces cada vez que cambia el <SELECT> ya se va guardando una copia de donde
esta posicionado.
Con eso cumple dos objetivos. 
1) Nunca lee del dom, ya tiene una copia de ese numero.
2) Si alguien mas quiere suscribirse a ese evento ? tambien puede tener acceso.

*/
