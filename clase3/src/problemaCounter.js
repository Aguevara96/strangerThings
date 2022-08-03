import {SEL} from './utiles'

let counter = () => {
   for (let x = 1; x <= 500000; x++) {
      SEL('txtContador').innerHTML = x
   }
}

counter()