//objetos

// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

<<<<<<< HEAD:ex3-carol.js
let pokemon = {
    nome: "charmander",
    nomeJapones: "hitokage",
    nomeEvolucao: "charmilion",
    tipo: "fogo",
    
}

pokemon.ataque = function(){
    console.log("Flame Blurst!")
}

let atacando = pokemon.ataque()

console.log(pokemon, atacando)

=======
const pokemon = {
  nome: "Charmander",
  nomeJapones: "Hitokage",
  numeroJohto: 234,
  evoluiDe: "Ovo",
  fraseFoda: function() {
    return "chaaaaarrrrr-maaaannn-deeeeerr"
  }
}

>>>>>>> 4e842b9714951902526ae3a40832f1079b0df3d0:ex3.js
// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

<<<<<<< HEAD:ex3-carol.js
console.log(`Oi, meu nome é ${pokemon.nome} e meu nome japonês é ${pokemon.nomeJapones}`)
=======
pokemon.frase = function() {
  return `Hello, my name is ${pokemon.nome}. And my name in Japanese ${pokemon.nomeJapones}.`
}

pokemon.frase()
>>>>>>> 4e842b9714951902526ae3a40832f1079b0df3d0:ex3.js

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `sabe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon["sabe_voar"] = true

pokemon.sabe_voar = false

console.log(pokemon)

// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".
pokemon.fly = function() {
  if (pokemon.sabe_voar) {
    return `I'm flyyyyyying`
  } else {
    return "I can't fly"
  }
}

pokemon.voando = function(sabe_voar){
    if(pokemon.sabe_voar != true){
        console.log('Desculpa, não sei voar!')
    } else {
        console.log('To voaaaaaaando caralha!')
    }
}

console.log(pokemon.voando())

// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".

<<<<<<< HEAD:ex3-carol.js
let acoes = ["FIGHT", "BAG", "RUN"]

pokemon.action = function(){
    return acoes[Math.round((Math.random()*1000))%acoes.length];
}

console.log(pokemon.action())

=======
pokemon["action"] = function() {
  let frase = ["Fight", "Bag", "Run"]
  let rand = Math.floor(Math.random() * frase.length)
  return frase[rand]
}

pokemon.action()
>>>>>>> 4e842b9714951902526ae3a40832f1079b0df3d0:ex3.js

// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.
pokemon.ask = function() {
  console.log(`What will ${pokemon.name} do?`)
  return pokemon.do_something
}

pokemon.pergunta = function(){
    console.log(`O que o ${pokemon.nome} vai fazer? ` + pokemon.action())
}

console.log(pokemon.pergunta())



// 7.
// Printe todas as propriedades
// do seu pokemon no console.
for (const key in pokemon) {
  console.log(key)
}

console.log(Object.keys(pokemon));

// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>
for (const key in pokemon) {
  console.log(`Chave:${key}| valor:${pokemon[key]}`)
}




for(var item in pokemon) {
    console.log(item)
}



//9 Faça uma função construtora de pokemon
