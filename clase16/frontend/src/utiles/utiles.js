let Mustache = require('mustache')

let SEL = n => {
   return document.getElementById(n)
}

let selByClass = n => {
   return document.getElementsByClassName(n)
}

let selArrByClass = c => {
   return [...selByClass(c)]
   // tambien Array.from(selByClass(c))
}

let formToObjectAnt = (className) => {
   let obj = {}
   Array.prototype.slice.call(
         document.getElementsByClassName(className)).forEach(elem => {
            obj[elem.dataset.name] = SEL(elem.id).value
         }
   )
   return obj
}

let formToObject = className => {
   let obj = {}
   selArrByClass(className).forEach(elem => {
      obj[elem.dataset.name] = SEL(elem.id).value
   })
   return obj
}

let armarObjetoDesdeHTML = (keyClass, valueClass) => {
   let arrKeys = [...document.getElementsByClassName('js-key-modifica')].map(z => z.innerText.trim())
   let arrValues = [...document.getElementsByClassName('js-query-mod')].map(z => z.value)

   let objRes = {}

   for (let x = 0; x < arrKeys.length; x++) {
      objRes[arrKeys[x]] = arrValues[x]
   }

   return objRes
}

let renderGrupoRep = (source, array, destination) => {
   let tmpl = SEL(source).innerHTML
   let htmlOut = Mustache.render(tmpl, {grupoRep:array})
   SEL(destination).innerHTML = htmlOut
}

window.Mustache = Mustache

module.exports = {
   SEL,
   formToObject,
   armarObjetoDesdeHTML,
   renderGrupoRep
}