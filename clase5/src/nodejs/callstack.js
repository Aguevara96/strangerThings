let ver = z => console.log(z)

let funcionEspecial = () => {
   ver('Estoy dentro de la funcion especial')
}

let fn6 = () => {
   ver('Llegue a la funcion fn6')
   throw { mensaje: 'hola amigos'}
   setTimeout(funcionEspecial, 0)
}

let fn5 = () => {
   ver('Antes de llamar a fn6')
   fn6()
   ver('Despues de llamar a fn6')
}

let fn4 = () => {
   ver('Antes de llamar a fn5')
   fn5()
   ver('Despues de llamar a fn5')
}

let fn3 = () => {
   ver('Antes de llamar a fn4')
   fn4()
   ver('Despues de llamar a fn4')
}

let fn2 = () => {
   ver('Antes de llamar a fn3')
   fn3()
   ver('Despues de llamar a fn3')
}

let fn1 = () => {
   ver('Antes de llamar a fn2')
   fn2()
   ver('Despues de llamar a fn2')
}

try {
   setTimeout(() => ver('Esta va primero...'), 100)
   fn1()
}
catch (err) {
   ver('ocurrio un error')
   ver(err)
}


/*
Manejo de la pila o stack.

Node tiene un motor de manejo de eventos
que lo va a mirar, SOLO cuando el call stack
este vacio, imposible que lo haga antes
*/