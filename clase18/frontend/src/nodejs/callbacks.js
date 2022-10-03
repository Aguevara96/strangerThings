let procedimiento = (resolve, reject) => {
   setTimeout(() => {
      resolve('SALIO TODO OK')
   }, 2000)

   setTimeout(() => {
      reject('SALIO TODO MAL')
   }, 4000)
}

procedimiento(txt => {
   console.log('SALIO X RESOLVE')
   console.log(txt)
}, err => {
   console.log('SALIO X REJECT')
   console.log(err)
})

