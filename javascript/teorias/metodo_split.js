// MÉTODO SPLIT

/* O método split divide uma string em uma lista ordenada de substrings, as coloca em uma array e retorna a array. A divisão é feita de
acordo com o primeiro parâmetro na chamada do método. É possível adicionar também um segundo parâmetro numérico, que limitará o número
de divisões feitas */

let input = "12 1 5.30\n16 2 5.10"
let lines = input.split('\n');   
                                 
let line1 = lines[0].split(" ");
let line2 = lines[1].split(" ");

let codigo1 = parseInt(line1[0]);
let num1 = parseInt(line1[1]);
let valor1 = parseFloat(line1[2]);
let codigo2 = parseInt(line2[0]);
let num2 = parseInt(line2[1]);
let valor2 = parseFloat(line2[2]);
let total = (num1*valor1) + (num2*valor2);

console.log("VALOR A PAGAR: R$ "+total.toFixed(2));



var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits);