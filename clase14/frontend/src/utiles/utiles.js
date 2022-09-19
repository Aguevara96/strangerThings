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

window.test = formToObject

module.exports = {
   SEL,
   formToObject
}