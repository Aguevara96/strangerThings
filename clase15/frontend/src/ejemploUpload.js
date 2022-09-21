
let formulario = document.getElementById('miForm')
formulario.addEventListener('submit', e => {
   e.preventDefault()
   console.log('click on submit')
   let xhr = new XMLHttpRequest()
   xhr.open('POST', 'upload.php')
   xhr.upload.addEventListener('progress', metadata => {
      console.log(metadata)
      let pb = document.getElementById('barraProgreso')
      pb.setAttribute('min', '0')
      pb.setAttribute('max', metadata.total)
      pb.value = metadata.loaded
   })
   let formData = new FormData()
   formData.append('image', document.getElementById('image').files[0])
   xhr.send(formData)
})