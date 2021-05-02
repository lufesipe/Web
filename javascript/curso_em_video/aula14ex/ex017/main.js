function contar(){
    var inicio = document.querySelector("#txtinicio")
    var fim = document.querySelector("#txtfim")
    var passo = document.querySelector("#txtpasso")
    var res = document.querySelector("#res")

    if (inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){ // Verifica se alguma célula está vazia
        res.innerHTML="Impossível contar!"
    } else {
        res.innerHTML="Contagem: "
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p<=0){
            alert("Impossível contar! Considerando passo 1")
            p=1
        }
        if (i<f){ // Contagem crescente
            for (var c=i; c<=f; c+=p){
                res.innerHTML+=` ${c} \u{23E9}`
            }
        } else { // Contagem decrescente
            for (var c=i; c>=f; c-=p){
                res.innerHTML+=` ${c} \u{23E9}`
            }
        }
        res.innerHTML+=` \u{2705}`
    }
}