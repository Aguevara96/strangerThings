let {SEL} = require('./utiles')

window.ahora = () => {



SEL('uno').addEventListener('click', e => {
   console.log('click sobre uno ' + e.target.id)
})

SEL('dos').addEventListener('click', e => {
   console.log('click sobre dos ' + e.target.id)
   // e.stopPropagation()
})

SEL('tres').addEventListener('click', e => {
   console.log('click sobre tres ' + e.target.id)

})

document.addEventListener('click', e => {
   console.log('Loggeo el click sobre document ...')
   console.log(e.target.id)
})

}
