let stackDeOpciones = []
window.stackDeOpciones = stackDeOpciones

const ID_PRIMER_NODO = 0

let pushStack = (nodo) => {
    if (nodo === ID_PRIMER_NODO) {
        emptyStack()
    }
    stackDeOpciones.push(nodo)
}

let popStack = () => {
    if (isEmpty()) {
        return 0
    }
    return stackDeOpciones.splice(-1)[0]
}

let emptyStack = () => {
    stackDeOpciones = []
    window.stackDeOpciones = stackDeOpciones
}

let isEmpty = () => stackDeOpciones.length === 0

module.exports = {
    pushStack, 
    popStack,
    isEmpty,
    emptyStack
}