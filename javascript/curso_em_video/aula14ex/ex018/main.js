function tabuada() {
    var num = document.querySelector("#txtnum")
    var tab = document.querySelector("#tabuada")

    if (num.value.length == 0){
        alert("Por favor, digite um número!")
    } else {
        var n = Number(num.value)
        tab.innerHTML=""
        for (var mult=1;mult<=10;mult++){
            var item = document.createElement("option")
            item.text = `${n} X ${mult} = ${n*mult}`
            item.value = `tab${mult}`
            tab.appendChild(item)
        }
    }
}