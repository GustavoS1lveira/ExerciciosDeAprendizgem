let numeros = [2, 4, 5, 6, 7, 8, 300, 2051];
let contador = 0

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        contador++;
    }
}

console.log(contador);