var num = document.querySelector("#txtnum")
var tab = document.querySelector("#tabela")
var lista = []

function adicionar(){
    var n = Number(num.value)
    res.innerHTML=""
    if (n>=1 && n<=100){
        if (lista.indexOf(n)!=-1){
            alert("Valor já encontrado na lista!")
        } else {        
        lista.push(n)
        var item = document.createElement("option")
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
        }
    } else if (n==""){
        alert("Digite um valor!")
    } else {
        alert("Valor inválido!")
    }
    num.value="" //Apaga o último valor inserido na caixa
    num.focus() //Coloca o foco de volta na caixa
}

function finalizar(){
    if (lista==""){
        alert("Adicione valores antes de finalizar!")
    } else {
    var res = document.querySelector("#res")
    var pos = lista.length
    var soma = 0
    lista.sort((a,b)=>a-b) //Coloca a lista em ordem crescente
    for (var c=0;c<pos;c++){
        soma += lista[c]
    }
    var media = soma / lista.length
    res.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${lista[lista.length-1]} .</p>`
    res.innerHTML += `<p>O menor valor informado foi ${lista[0]}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

function reiniciar(){
    lista.splice(0,lista.length)
    tab.innerHTML = ""
    res.innerHTML = ""
}