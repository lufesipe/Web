function checkEqual(a, b) {
    return a==b ? "Equal" : "Not Equal"
    // O operador ternário faz a função do if-else utilizando apenas uma linha, possui a estrutura "a ? b : c"
    // "a" é a condição a ser testada
    // "b" é o resultado caso a condição seja true
    // "c" é o resultado caso a condição seja false
}
var resp1 = checkEqual(1, 2)
console.log(resp1)



function checkSign(num) {
    return num > 0 ? "positive" // É possível adicionar várias condições ao operador ternário
      : num < 0 ? "negative"    // Esse formato é recomendado para escrever um ternário com várias condições, devido a melhor visualização
      : "zero"
}
var resp2 = checkSign(10)
console.log(resp2)