// igualdade entre objetos

function Endereco(rua, cidade, cep){
    this.rua = rua;
    this.cidade = cidade,
    this.cep = cep
};

const endereco01 = new Endereco('a', 'b', 'c');
const endereco02 = new Endereco('a', 'b', 'c');
const endereco03 = endereco01;



// função para comparar propriedades se são iguais
function comparaEnderecos(enderecoa, enderecob){
    let resposta = true;
    for(let key in enderecoa){
            if(enderecoa[key] !== enderecob[key]){
                resposta = false;
            }
    }
    return resposta;
}

//compararObjetos(endereco01, endereco02);
// função para comparar se os objetos provem do mesmo endereço de memoria
function compareMemoryAddress(enderecof, enderecog){
    if (enderecof === enderecog){
        return true;
    }
    return false;
}
console.log(comparaEnderecos(endereco01, endereco02));
console.log(compareMemoryAddress(endereco01, endereco02));