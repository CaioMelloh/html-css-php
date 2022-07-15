function construirMinion(nome, cor, idade){
    this.nome = nome,
    this.cor = cor,
    this.idade  = idade,
    this.pegarBanana = function(){
        console.log("pegando a banana");
    }
};

const minion01 = new construirMinion('kevin', 'amarela', '234');

minion01.pegarBanana();

minion01.cor = 'roxo';
console.log(minion01.cor);
delete minion01.idade;
console.log(minion01);