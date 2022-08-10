let {SEL} = require('./utiles')

SEL('idLink1').addEventListener('click', e => {
   e.preventDefault()
   console.log(e)
})

SEL('idLink2').addEventListener('click', e => {
   e.preventDefault()
   console.log(e)
})

/*
<div class="col-sm-2">
            <a id="idLink1" href="">
               <div id="pruebaAnchor"></div>
            </a>
         </div>
         <div class="col-sm-2">
            <a id="idLink2" href="">Link 2</a>
         </div>
         <div class="col-sm-8"></div>
*/