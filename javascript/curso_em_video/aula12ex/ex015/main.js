function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        msg.innerHTML += " da manhã."
        img.src = "manha.jpg"
        document.body.style.background = "rgb(182,209,218)"
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML += " da tarde."
        img.src = "tarde.jpg"
        document.body.style.background = "rgb(191,109,59)"
    } else {
        msg.innerHTML += " da noite."
        img.src = "noite.jpg"
        document.body.style.background = "rgb(130,102,160)"
    }
}