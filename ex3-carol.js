// //objetos

// // 1.
// // Defina um objeto de
// // Javascript que descreva
// // um dos pokemons da lista
// // de pokemons do Wikipedia.
// // com pelo menos 4 propriedades e 1 método
// // ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

// let pokemon = {
//     nome: "charmander",
//     nomeJapones: "hitokage",
//     nomeEvolucao: "charmilion",
//     tipo: "fogo",
    
// }

// pokemon.ataque = function(){
//     console.log("Flame Blurst!")
// }

// let atacando = pokemon.ataque()

// console.log(pokemon, atacando)


// // 2.
// // Printe no console a seguinte
// // frase: "Oi, meu nome é  < >.
// // e meu nome japones é < >."

// console.log(`Oi, meu nome é ${pokemon.nome} e meu nome japonês é ${pokemon.nomeJapones}`)


// // 3.
// // Adicione uma nova propriedade ao
// // seu pokemon chamada `sabe_voar`
// // (ou algo do tipo) e defina
// // ela como `true` ou `false`.

// pokemon.sabe_voar = false

// console.log(pokemon)

// // 4.
// // Adicione um método ao seu pokemon
// // chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// // To voaaaaaando!".

// pokemon.voando = function(sabe_voar){
//     if(pokemon.sabe_voar != true){
//         console.log('Desculpa, não sei voar!')
//     } else {
//         console.log('To voaaaaaaando caralha!')
//     }
// }

// console.log(pokemon.voando())

// // 5.
// // Adicione um método chamado
// // `action` ao seu pokemon
// // que retorna randomicamente uma
// // das Strings "FIGHT", "BAG" ou "RUN".

// let acoes = ["FIGHT", "BAG", "RUN"]

// pokemon.action = function(){
//     return acoes[Math.round((Math.random()*1000))%acoes.length];
// }

// console.log(pokemon.action())



// // 6.
// // Adicione um método chamado
// // `pergunta` ao seu pokemon que printa
// // no console "O que o  < > vai fazer?" e
// // retorna o resultado do metodo
// // `acao`.

// pokemon.pergunta = function(){
//     console.log(`O que o ${pokemon.nome} vai fazer? ` + pokemon.action())
// }

// console.log(pokemon.pergunta())



// // 7.
// // Printe todas as propriedades
// // do seu pokemon no console.
// for (const key in pokemon) {
//   console.log(key)
// }


// // 8.
// // Printe todas as propriedades
// // e seus respectivos valores no
// // console no seguinte formato:
// // <propriedade>: <valor>
// for (const key in pokemon) {
//   console.log(`Chave:${key}| valor:${pokemon[key]}`)
// }




//9 Faça uma função construtora de pokemon

function Pokemon(nome, nomeJapa, evolucao) {
  this.nome = nome
  this.nomeJapa = nomeJapa
  this.evolucao = evolucao
}

const pokemon1 = new Pokemon('charmander', 'hitokage', 'ovo')

console.log(pokemon1)


