let traerTodosLosUsuarios = (onSuccess, onFail) => {
   fetch('/usuarios.json')
   .then(z => z.json())
   .then(datos => {
      onSuccess(datos)
   })
   .catch(e => {
      onFail(e)
   })
}

module.exports = {
   traerTodosLosUsuarios
}