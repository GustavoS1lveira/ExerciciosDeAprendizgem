let i = 0
let total = 0

while (i < 50){
    if(i % 2 === 1){
        console.log(i, "é impar")
        total++
    }
    i++
}

console.log("Total de impares é:", total)