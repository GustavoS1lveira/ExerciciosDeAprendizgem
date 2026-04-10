let numeros = [2, 3, 4]

let resultado = numeros.reduce((acc, atual) => {
    return acc + atual
}, 0)

console.log(resultado)