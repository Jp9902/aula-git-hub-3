const name = ['Joao', 'Caio','Julia', 'Guilherme']
console.log(nome[1])

function gerarAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 4)
    return numeroAleatorio
}

function sortearNome(){
    let numeroSorteado = gerarAleatorio()
    console.log(nomes(numeroSorteado))
    

}