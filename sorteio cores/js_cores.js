function sortearcores(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function sortear(){
    const cor = sortearcores()
    document.body.style.backgroundColor = cor
    document.getElementById('paragrafo').innerHTML = cor
}