var n;
n = parseInt(prompt("Ingrese un numero: "));

if (n===0) {
   alert('no puede ser 0')
   return
}

while(n!==1){
   console.log(n);
   if(n%2===0){
     n=n/2;
   } else if(n%2!=0){
     n=(3*n)+1;
   }
}
