/*faça uma função capaz de ler as propriedades de um objeto e apresentar somente as que são do tipo string*/

const hqDoBatman = {
    ano : 1987,
    roteirista : "Dannis O'neil",
    desenhista: 'Mark Baar',
    criador : 'Bob Kane'
};
exibirStringObject(hqDoBatman);

function exibirStringObject(objeto){
    for(const key in objeto){
        if(typeof(objeto[key]) === 'string'){
            console.log(key, ':', objeto[key]);
        }
    }
}