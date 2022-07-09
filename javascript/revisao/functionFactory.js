function  fabricarPessoas(nome, corOlhos, numeroSapato, idade){
    this.corOlhos = corOlhos,
    this.deMaior = true,
    this.nome = nome,
    this.numeroSapato = numeroSapato
    this.idade = idade
};

const pessoa02 = new fabricarPessoas('Jorge', 'azuis', 41, 18);


function avaliarPersona(pessoa){
    if (pessoa.idade < 18){
        console.log('Não poderá participar da festa!');
    }
    else console.log("Seja bem-vindo(a)");
}

avaliarPersona(pessoa02);
