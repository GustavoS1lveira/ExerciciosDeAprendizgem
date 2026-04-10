let nums = [2, 3, 4]

let resultados = nums.reduce((acc, atual) => {
    return acc * atual
}, 1)

console.log(resultados)