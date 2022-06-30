// criar um afunção capaz de receber um numero e imprimir um numero de linhas correspondente a esse número recebido em forma de asteriscos e em ordem crescente;

exibirAsteriscos(4);
function exibirAsteriscos(numero){

    /*let padrao = '';
    for(let i = 1; i<=numero; i++){
        
        padrao+= '*';
        console.log(padrao);
        /*console.log(Math.pow(asteriscos,2));*/
// duas formas de fazer

        for(let i = 1; i<=numero; i++){
            let padrao = '';
            for(let j = 1; j<=i; j++){
                padrao += '*';
            }
            console.log(padrao);
        }
    }

