// criar objeto e cloná-lo

/*function pinguim(cor, peso, nome){
    this.cor = cor,
    this.peso = peso,
    this.nome = nome,
    this.grasnar = function(){
        console.log("Quak!!!!");
    }
};

let josh = new pinguim();
josh.grasnar();
let happyFeet = new pinguim();*/
        
/*  na parte de cima uma classe pinguim, abaixo um objeto happy Feet
*/
const happyFeet = {
    cor: "Branco e Preto",
    nome: "Happy",
    idade: 4,
    sapatear(){
        console.log("Sapateando");
    }
};

happyFeet.sapatear();
const newHappyFeet = Object.assign({
    cantar(){
        console.log("Agora eu posso cantar sobre os ventos do norte e as focas da praia");
    }
}, happyFeet);
newHappyFeet.cor = "branco";
newHappyFeet.cantar();