
let init = () => {
   window.pantallaPrincipal = (!window.pantallaPrincipal) ? {} : pantallaPrincipal
   window.pantallaPrincipal.acciones = (!window.pantallaPrincipal.acciones) ? [] : window.pantallaPrincipal.acciones
   window.pantallaPrincipal.ultimoEvento = (!window.pantallaPrincipal.ultimoEvento) ? [] : window.pantallaPrincipal.ultimoEvento
}

module.exports = { init }
