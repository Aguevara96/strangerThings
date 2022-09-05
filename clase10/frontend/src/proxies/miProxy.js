let traerTodosLosUsuarios = (onSuccess, onFail) => {
   fetch('/api/usuario')
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