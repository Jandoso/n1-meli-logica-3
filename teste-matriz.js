const array1 = []
let count = 1
for(i = 0; i < 6; i++){
    const linha = []
    for(let j = 0; j < 5; j++){
        linha[j] = count
        count ++
    }
    array1[i] = linha
}

console.log(array1) 