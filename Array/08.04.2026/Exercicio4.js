let x = [10, 13, 14, 27, 399, 4002]
let i = 0
let total = 0

while (i < x.length){
    if(x[i] % 2 === 0){
        console.log(x[i])
        total++
    }
    i++
}

console.log("Total de numeros pares são: ", total)