// combinando arrays utilizando a função join

const numeros = [1,2,3,4,5,6];
const combinando = numeros.join('|');
console.log(combinando);

// ---------

const codigo = ['seja bem', 'vindo ao nosso guarda', 'chuva'];
const fraseReformulada = codigo.join('-');
console.log(fraseReformulada);
const oldSameSentence = fraseReformulada.split('-');
console.log(oldSameSentence);

//-----
const code = ['124564', '89595'];
const result = code.join('-');
console.log(result);

//usando uma url qualquer para trabalhar com as func split e join

const url = ['tabuada', 'do', '2', '.html'];
const newUrl = url.join('-');
console.log(newUrl);