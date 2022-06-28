/*criar função que soma todos os multiplos de 3 e 5 entre o intervalo de 0 e o numero proposta na função:
ex num = 10
mult 3 : 3, 6, 9;
mult 5: 5, 10;    soma mult 3 e 5  = 33 */

console.log(somaDosMultiplos(10));

function somaDosMultiplos(num){
    let multdetres;
    let multdecinco;
    let soma;
    for(let i = 1; i<= num; i++){
        if(i>=3 && i%3 == 0){
            multdetres = multdetres + i;
            console.log(multdetres);
        }
        /*if(i % 5 == 0){
            multdecinco += i;
        }*/
    }/***/
    /*return multdetres;*/
}
