function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora >= 6 && hora < 12){
        img.src = "fotomanha.png"
        document.body.style.background ="#dbd1ca"
    } else if (hora >= 12 && hora <= 18){
        img.src = "fototarde.png"
        document.body.style.background ="#fdb00c"
    } else{
        img.src = "fotonoite.png"
        document.body.style.background = "#43375b"
    }

} 


