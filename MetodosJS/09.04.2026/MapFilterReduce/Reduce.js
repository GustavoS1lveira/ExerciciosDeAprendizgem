let numeros = [2, 3, 4]

let resultado = numeros.reduce((acumulador, atual) => {
    return acumulador + atual
}, 0)

console.log(resultado)