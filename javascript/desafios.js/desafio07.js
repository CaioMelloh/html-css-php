/*criar função que soma todos os multiplos de 3 e 5 entre o intervalo de 0 e o numero proposta na função:
ex num = 10
mult 3 : 3, 6, 9;
mult 5: 5, 10;    soma mult 3 e 5  = 33 */

function somaDOsMultiplos(numero){
    let sometres = 0;
    let somecinco = 0;
    // é necessário inicializar a variavel com um numero antes de utilizá-la
    for(let i = 1; i <= numero; i++) {

    if (i % 3 == 0) {
        sometres += i;
    }
    if (i % 5 == 0) {
        somecinco += i;
    }

}
    return sometres + somecinco;
}

console.log(somaDOsMultiplos(10));
 
