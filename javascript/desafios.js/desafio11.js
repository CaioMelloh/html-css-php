// construir um objeto endereço que contenha
// rua, cidade, cep, função exivbir endereço recebendo um endereço
let endereco = {
    rua: 'Limoeiro',
    cidade: 'Pindamoiangaba',
    cep: 41163000
    
};

function exibirEndereco(endereco){
    for(chave in endereco){
        console.log(
        `O endereco é:
        ${endereco.rua} 
        cidade: ${endereco.cidade} 
        cep: ${endereco.cep}`);
    }
}

exibirEndereco(endereco);