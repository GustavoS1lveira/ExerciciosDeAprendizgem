let nums = [10, 15, 20, 25, 30]

let filtrar = nums.filter(num => num > 15)
let mapear = filtrar.map(num => num * 2)
let reducee = mapear.reduce((acc, atual) => {
    return acc + atual
}, 0)

console.log(reducee)