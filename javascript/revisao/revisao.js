// criar um objeto endereço com rua cidade cep e criar uma funçao exibir endereco

const endereco = {
    rua: 'Limoeiro',
    cidade: 'Mauricio',
    cep: 41156992
};


function exibirEndereco(endereco){
    for(let key in endereco){
        console.log(endereco[key]);
    }
}

exibirEndereco(endereco);