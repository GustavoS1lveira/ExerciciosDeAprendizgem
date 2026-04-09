let i = 20
let total = 0

while (i >= 1){
    if(i % 2 === 1){
        console.log(i)
        total++
    }
    i--
}

console.log("O total de numeros impares é: ", total)