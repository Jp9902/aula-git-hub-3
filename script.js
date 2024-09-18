const Future = ['Você ficará rico', 'Você Morrerá logo','Você vai conhecer sua alma gêmea', 'Você vai fazer algo incrivel']

function gerarAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * Future.length)
    return numeroAleatorio
}

function futuro(){
    let FuturoSorteado = gerarAleatorio()
    window.alert(Future[FuturoSorteado])


}