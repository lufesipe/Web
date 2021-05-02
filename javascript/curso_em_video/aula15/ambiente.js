let num = [5,8,2,9,3]
num.push(7) // Adiciona um valor ao final da array
num.sort() // Coloca os valores em ordem crescente
num.shift() // Retira o primeiro valor
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

/*
for (let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem valor ${num[pos]}.`)
}
*/

for (let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}.`)
}

console.log(`O valor 7 está na posição ${num.indexOf(7)}.`)