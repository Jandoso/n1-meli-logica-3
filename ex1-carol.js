//1 - Dada a array const xx = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array imprimindo na tela todos os dados que incluem nela
/* const xx = [23, 43, 63, 73, 83, 93, 102]
for (let i = 0; i <= xx.length-1; i++){
    console.log(xx[i])
} */


// 2- Dada a array const doces = ['sorvete', 'pirulito', 'bombom'];
// Adicione um novo item de sua escolha no começo dessa array.
/*
const doces2 = ['sorvete', 'pirulito', 'bombom']
doces2.unshift('chiclete')
console.log(doces2) */

// 3 Dada a array const doces = ['sorvete', 'pirulito', 'bombom'];
// Adicione um novo item de sua escolha no final dessa array.
/*
const doces = ['sorvete', 'pirulito',  'bombom']
doces.push('bala')
console.log(doces) */

//  4- Dada a array const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days'];
// inverta a ordem dos items e log na tela : 'dance of days', 'blink182', 'linking park', 'fresno'

/* const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days']
function bubbleSort(bandasEmo){
    let swap
    let last = bandasEmo.length-1
    do{
        swap = false
        for(let i = 0; i< last; i++){
        [bandasEmo[i], bandasEmo[i+1]] = [bandasEmo[i+1], bandasEmo[i]]
        swap = true
        }
        last -- 
    } while(swap) 
   return bandasEmo 
}
bubbleSort(bandasEmo)
console.log(bandasEmo) */
/*
const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days']
console.log(bandasEmo.reverse())
*/ 
// 5 - Dada a array const array = [23, 45, 13, 71];
// Insira o número 11 no meio, chegando ao output = 23, 45, 11, 13, 71
/*
const array = [23, 45, 13, 71]
array.splice(2,0,11)
console.log(array) */

//6-  Dada a array const array = [23, 45, 13, 17];
// Tire o número 45 da array.
/*const array2 = [23, 45, 13, 17]
array2.splice(1,1)
console.log(array2) */

// 7- Crie um Array de 10 valores, apenas com Números Ímpares.
// depois imprima os valores na tela
/*
const array3 = []
let cont = 0
for(let i = 0; cont < 10; i++){
    if(i % 2 != 0){
        array3.push(i)
        cont ++
    }
}
console.log(array) */

// 8- Dada a array const x = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.
/*
const x = [23, 43, 53, 73, 83, 93, 102]
const x2 = []
x.forEach(function(item){
    x2.push(item + 2)
});
console.log(x2)
*/

// 9- dada a array const lista = [56, 89, 34, 12, 23, 55, 9]
// ordene a lista .
/*
const lista = [56, 89, 34, 12, 23, 55, 9]
function bubbleSort2(lista){
    let swap
    let last = lista.length-1
    do{
        swap = false
        for (let i = 0; i < last; i ++){
            if (lista[i]> lista[i+1]){
                [lista[i], lista[i+1]] = [lista[i+1], lista[i]]
                swap = true
            }
        }
        last --
    } while(swap)
    return lista
    
}
bubbleSort2(lista)
console.log(lista)
*/
const arr = []
let count = 1
for (let i = 0; i < 5; i++){
    const linha = []
    for(let j = 0; j < 5; j++){
        linha[j] = count
        count ++
    }
    arr[i] = linha 
}
console.log(arr)
