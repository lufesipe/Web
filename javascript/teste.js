let lines = [14,105,100]

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);

let maiorAB = (a+b+Math.abs(a-b))/2;
let maior = (maiorAB+c+Math.abs(maiorAB-c))/2;
console.log(maior+" eh o maior");