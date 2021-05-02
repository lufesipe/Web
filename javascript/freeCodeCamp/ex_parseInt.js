function convertToInteger(str) {
    return parseInt(str)
    // A função parseInt() converte a string em um número inteiro, caso a string não seja um número
    // retornará NaN
}
var resp5 = convertToInteger("56,7");
console.log(resp5)



function convertToInteger(str) {
    return parseInt(str, 2) // O primeiro argumento é a string a ser convertida em inteiro, o segundo argumento é a base do número
                            // que pode variar de 2 a 36. No caso, está dizendo que a string está no sistema binário. A função
                            // parseInt irá então converter para um inteiro a partir do sistema binário
}
var resp6 = convertToInteger("10011");
console.log(resp6)