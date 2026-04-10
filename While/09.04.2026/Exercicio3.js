let x = [1, 3, 5, 6, 8, 9]
let i = 0
let soma = 0


while(i < x.length){
    if(x[i] % 2 === 0){
        soma += x[i]
    }
    i++
}

console.log("A soma dos numeros pares é: ", soma)