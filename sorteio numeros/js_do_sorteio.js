function geradordenumeros(max){
    return Math.floor(Math.random() * max)
}

function botao(){
    const sorteio = geradordenumeros(101)
    cont = 0

    while(true){
        numero = parseInt(prompt(`Tentativas: ${cont}/6 \nDigite um numero: ` ))

        if (numero == sorteio){
            perg=prompt(`Parabens você acertou!!! \nDeseja jogar novamente? (s/n)`)
            if(perg === "n" || perg === "N"){break}
            else{cont=0}}

        if(cont==6){
            perg=prompt(`Você perdeu. seu número da jogada era ${sorteio} \nQuer jogar novamente? (n/s)`)
            if(perg==="n" || perg==="N"){break}
            else{cont=0}}

        else if(numero < sorteio){
            alert(`Seu chute está baixo.`)}

        else if(numero > sorteio){
            alert(`Seu chute está alto.`)}

    
        cont+=1
        
    }
}
