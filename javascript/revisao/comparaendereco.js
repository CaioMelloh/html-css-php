function criaEndereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
};

const endereco01 = new criaEndereco('a', 'b', 'c');
const endereco02 = new criaEndereco('a', 'b', 'c');
const endereco03 = endereco02;

function comparaObjetos(a, b){
    let response = true;
        for( let key in a){
            if(a[key] !== b[key]){
                response = false;
            }
        }

        return response;


   /* return response*/
}

console.log(comparaObjetos(endereco01, endereco02));

function compareMemoryAddress(end1, end2){
    let response = true;
    if(end1 !== end2) response = false; 
    return response;
}
console.log(compareMemoryAddress(endereco03, endereco02));