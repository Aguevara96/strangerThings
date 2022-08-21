let obj = {
   nombre: 'Cesar',
   apellido: 'Goncalves'
}

let arr = [2, () => { console.log('hello world') }]

let {apellido : ape} = obj

console.log(ape)

let [valor, fn] = arr

fn()