/*function countdown(n){ // Cria uma array com uma contagem regressiva de maneira recursiva
    if (n<1) {
      return [];
    } else {
      var array = countdown(n-1)
      array.unshift(n)
      return array
    }
}
var resp = countdown(5)
console.log(resp)*/

function rangeOfNumbers(startNum, endNum) { 
    // Cria uma array com a faixa de números chamada e faz com que todos os valores sejam inteiros
    if (startNum>endNum) {
        return [];
    } else {
        var array = rangeOfNumbers(startNum, endNum-1)
        array.push(parseInt(endNum))
        return array
    }
  };
  var resp = rangeOfNumbers(1, 5)
  console.log(resp)