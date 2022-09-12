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

let borrarUnUsuario = (idUsuario, onSuccess, onFail) => {
   let url = ['/api/usuario/', idUsuario].join('')
   fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
      }
      })
      .then(function(response) {
          console.log('response =', response);
          return response.json();
      })
      .then(function(data) {
          console.log('data = ', data);
          onSuccess(data)
      })
      .catch(function(err) {
          console.error(err);
          onFail(err)
      });
}

window.borrar = borrarUnUsuario

module.exports = {
   traerTodosLosUsuarios,
   borrarUnUsuario
}