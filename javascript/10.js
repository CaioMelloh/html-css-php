// construct functions
// um constutor se utiliza do new, similar ao java nesse quesito

function Minions(nome, peso, idade, cor){
    this.nome = nome,
    this.cor = cor;
    this.idade = idade;
    this.peso = peso;
    this.soroMaligno = function(){
           this.cor = true;
    }
    this.geleiaDeMorango = function(){
        this.cor = false;
    }
    this.verificarMinion = function(){
        if(this.cor) console.log(" Minion maligno");
        else console.log("minion comum");
    }
}
const minions01 = new Minions("BOB", "20kg", 234, false);
console.log(minions01);

minions01.verificarMinion();
minions01.soroMaligno();
minions01.verificarMinion();
