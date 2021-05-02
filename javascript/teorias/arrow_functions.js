// ARROW FUNCTIONS
// São sempre funções anônimas
// Permitem obter o mesmo resultado com menos linhas que uma function normal

function sum(a,b) { // Função escrita de maneira completa
    return a+b
}
let resp1=sum(1,2)
console.log(resp1)


// Em arrow functions não é preciso usar a palavra function, mas é necessário atribuir a função a uma variável. 
// Logo após isso, usa-se a fat arrow.
const sum1 = (a,b) => a+b 
console.log(sum1(1,2))    // Quando só há uma instrução o return é implícito e não há a necessidade de chaves


// Quando só há 1 paramêtro na função, não precisa usar parênteses
const isAdult = age => age>=18
console.log(isAdult(19))


// Quando não há paramêtro na função, usa-se os parênteses vazio
const getRandomNumber = () => Math.random()
console.log(getRandomNumber())


// Também é possível setar valores default para parâmetros, esses valores serão mostrados quando os argumentos não forem especificados.
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());