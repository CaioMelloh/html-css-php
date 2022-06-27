let nome = 'Caio Mello';
console.log("olá, " + nome);
let idade = 25;
console.log('Olá, meu nome é ' + nome + ' e eu tenho ' + idade + ' anos');
console.log("Olá, meu nome é", nome);
// variaveis
console.log(typeof(nome));

/*tipo object*/
let cachorro = {
    raca : 'pastor alemão',
    idade : 24,
    nomeDono : 'Tobias'
};
console.log(cachorro.nomeDono);
/*tipo object*/

/*arrays*/
let numerosDaSorte = [5, 4, 3, 2, 'número ímpar maior que 2 e menor que 5'];
console.log(numerosDaSorte[4]);
for(let i = 0; i<numerosDaSorte.length; i++){
    console.log(numerosDaSorte[i]);
}
/*funções*/
function andarDeCarro(numero){
    if(numero > 0){
        console.log('Vrum Vrum !');
    }
    else{
        console.log('ZZZzz...');
    }
}

function elevarAoExpoente(num, expoente){
    return num**expoente;
}
// testando função sem retorno
andarDeCarro(0);
andarDeCarro(8);
// testando função com retorno
console.log(elevarAoExpoente(3,4));