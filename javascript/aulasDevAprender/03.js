let numero = 8;

let Younkou = {
    nome : 'Kaidou',
    recompensa : 2000000
};

function alterarNumber(){
    if(numero > 5){
        numero = 9;
    }
    else{
        numero = 7;
    }
}

/*function alteraYounkou(nome){
    nomeYounkou = nome;
}*/


function alteraYounkou(nome, recompensa){
    Younkou.nome = nome;
    Younkou.recompensa = recompensa; 
}
/*atribuição*/ 

console.log(numero);
/*antes da function*/
alterarNumber();
/*depois da function*/
console.log(numero);

console.log(Younkou);
/*antes da function*/
alteraYounkou('Luffy', 3000000);
console.log(Younkou);