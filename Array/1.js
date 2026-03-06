let nomes = "Rafael"

let contador = 0

for (let i = 0; i < nomes.length; i++) { // o for é um laço de repetição que percorre dentro de uma condição
    if(nomes[i] === "a"){
        contador++
    }
}

console.log(contador)


// [R][a][f][a][e][l]
// 0  1  2  3  4  5

// (i = 0; i < nomes.length; i++):

// "i = 0" dentro do for significa que ele vai começar em 0 a contagem, como no exemplo acima

// "i < nomes.length" significa que o contador irá contar até o numero de itens que a variavel contém.

// "i++" ele incrementa um valor a mais

// "contador" ele conta