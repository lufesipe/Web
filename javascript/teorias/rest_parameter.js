// REST PARAMETER
/* 
É possível também criar funções que aceitam um número variável de argumentos, para isso utiliza-se 
o parâmetro rest. Ele faz com que esses argumentos sejam guardados em uma array que pode ser acessada
pela função.
Esse parâmetro permite a aplicação dos parâmetros map(), filter() e reduce()
*/

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
  