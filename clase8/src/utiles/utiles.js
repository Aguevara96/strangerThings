let SEL = n => {
   return document.getElementById(n)
}

let formToObject = (className) => {
   let obj = {}
   Array.prototype.slice.call(
         document.getElementsByClassName(className)).forEach(elem => {
            obj[elem.dataset.name] = SEL(elem.id).value
         }
   )
   return obj
}

module.exports = {
   SEL,
   formToObject
}