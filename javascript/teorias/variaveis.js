// VARIÁVEIS
// escopo global, escopo local
// var (global), let (dentro do bloco), const


// UTILIZANDO VAR
var nome1 = "luiz"
var nome1 = "felipe"
console.log(`O nome 1 é ${nome1}`) // Nome retornará "felipe", pois var é uma variável então seu valor pode ser alterado


var nome2 = "luiz"
if (true){
    nome2 = "felipe" 
}
console.log(`O nome 2 é ${nome2}`) // Neste caso, console.log também retornará "felipe", pois a variável var "foge" do escopo
                                   // Devido a isso sua utilização é considerada uma má prática




// UTILIZANDO LET
if (true){
    let nome3 = "luiz" 
    nome3 = "felipe"
    console.log(`O nome 3 é ${nome3}`) // Assim como var, let também aceita sobreposição
}
//console.log(`O nome 3 é ${nome3}`) // A variável let depende do escopo em que foi declarada, então este console.log
                                     // que está no escopo global não será capaz de mostrá-la, estando ela dentro de um escopo local (bloco)


let nome4 = "luiz" // Para que ela seja acessada de forma global, deve ser declarada fora do bloco no escopo global
if (true){ 
    nome4 = "felipe" // Porém, ainda assim ela será sobreposta
}
console.log(`O nome 4 é ${nome4}`) // Este console.log irá mostrar "felipe" pois, mesmo tendo sido sobreposta localmente, 
                                   // foi declarada no escopo global


let nome5 = "luiz"
if (true){ 
    console.log(`O nome 5 é ${nome5}`) // O oposto pode ser feito, declarar no escopo global e chamar em um escopo local, pois
                                       // o escopo local é um bloco dentro do grande bloco que é o escopo global
}




// UTILIZANDO CONST
const nome6 = "luiz" // Declarando uma constante, ela terá apenas o primeiro valor atribuido
if (true){ 
    // nome5 = "felipe" 
    // Este comando gera um erro no programa, visto que const não pode ser reatribuido
}
console.log(`O nome 6 é ${nome6}`) // Retornará a string luiz


if (true){ 
    const nome7 = "luiz"
}
// console.log(`O nome 7 é ${nome7}`) // Const, assim como let, também é declarada localmente, com isso, este console.log gerará um erro


if (true){ 
    const nome8 = {nome8:"luiz", idade: 24}
    nome8.nome8 = "felipe"   // Porém, é possível criar arrays e objetos com const e alterar os valores de suas propriedades,
                            // entretanto, não é possível criar uma nova array ou objeto e reatribuir nome8 inteira
    console.log(nome8)
}

if (true){ 
    const nome9 = {nome9:"luiz", idade: 24}
    Object.freeze(nome9)    // Como visto, declarar uma const não protege os dados por si só, para isso existe a função Object.freeze
    nome9.nome9 = "felipe"   // que impede a alteração de dados. Não sendo possível adicionar, atualizar ou remover dados do objeto.
    console.log(nome9)
}