// existe quatro formas de se esvaziar uma array
let numero = [1,2,3,6,5,8];

// primeira forma (reatribuindo com vazio)
/*numero = [];
console.log(numero);*/

// segunda forma (usando o .length)
/*numero.length = 0;
console.log(numero);*/

// terceira forma (usando o while)
/*while(numero.length > 0){
    numero.pop();
}
console.log(numero);*/

// quarta forma (usando o  splice)

numero.splice(0,numero.length);
// iniciando na posição zero e elimininando o equivalente ao tamanho
console.log(numero);

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

let concatenado = array1.concat(array2);

console.log(concatenado);

let dividido = concatenado.slice(0,3);
console.log(dividido);