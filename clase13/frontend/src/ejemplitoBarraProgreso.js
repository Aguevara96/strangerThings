let asyncForLoop = require('@arteysoft/asyncforloop')

let ejemploBarraProgreso = () => {
   var barra = document.getElementById("barraProgreso")
   asyncForLoop(121, (index, next)=>{
      barra.setAttribute("value", index)
      setTimeout(next, 50)
   }, ()=>{
      setTimeout(ejemploBarraProgreso, 100)
   })
}

module.exports = ejemploBarraProgreso