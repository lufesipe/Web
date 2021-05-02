function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert("[ERRO] Verifique o ano e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "homem"
            if (idade >=0 && idade <14){
                // Criança
                img.setAttribute("src", "images/criança_m.jpg")
            } else if (idade < 29){
                // Jovem
                img.setAttribute("src", "images/jovem_m.jpg")
            } else if (idade < 60){
                // Adulto
                img.setAttribute("src", "images/adulto_m.jpg")
            } else {
                // Idoso
                img.setAttribute("src", "images/idoso_m.jpg")
            }
        } else {
            genero = "mulher"
            if (idade >=0 && idade <14){
                // Criança
                img.setAttribute("src", "images/criança_f.jpg")
            } else if (idade < 29){
                // Jovem
                img.setAttribute("src", "images/jovem_f.jpg")
            } else if (idade < 60){
                // Adulto
                img.setAttribute("src", "images/adulto_f.jpg")
            } else {
                // Idoso
                img.setAttribute("src", "images/idoso_f.jpg")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}