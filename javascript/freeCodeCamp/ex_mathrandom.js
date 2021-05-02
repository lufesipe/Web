function random(){
    return Math.random() // A função Math.random() gera um número aleatório de 0 (inclusivo) até 1 (exclusivo)
}
var resp2 = random()
console.log(resp2)



function random2() {
    return Math.floor(Math.random()*10);
    // Multiplicando Math.random() por 10, será gerado um número aleatório de 0 a 10 (exclusivo)
    // A função Math.floor arredonda o decimal para o inteiro mais próximo, fazendo com que esta função só
    // gere valores aleatórios de 0 a 9                                 
}
var resp3 = random2()
console.log(resp3)



function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    // Esta fórmula faz com que o usuário possa definir a faixa dos números aleatórios que serão gerados através dos argumentos
    // da função randomRange que serão chamados
}
var resp4 = randomRange(10,90)
console.log(resp4)