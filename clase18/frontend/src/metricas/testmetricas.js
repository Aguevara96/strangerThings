

let tomaMetricaMemoria = () => {
    let fn = document.getElementById('txtFirstName').value        
    let ci = document.getElementById('txtCity').value
    let op = document.getElementById('opcionesScript').selectedIndex

    let ts = new Date()
    for (let idx = 0; idx < 10000000; idx++) {
        let {fnz, ciz, opz} = {fn, ci, op}
    }
    let diff = new Date() - ts;
    alert(diff)
}

let tomaMetricaDom = () => {
    let ts = new Date()
    for (let idx = 0; idx < 10000000; idx++) {
        let fn = document.getElementById('txtFirstName').value        
        let ci = document.getElementById('txtCity').value
        let op = document.getElementById('opcionesScript').selectedIndex
    }
    let diff = new Date() - ts;
    alert(diff)
}

let initComponent = () => {
    document.addEventListener('click', e => {
        if (e.target.id === 'btnIniciar') {
            e.preventDefault()
            tomaMetricaDom()
            tomaMetricaMemoria()
        }
    })
}



module.exports = {
    initComponent
}