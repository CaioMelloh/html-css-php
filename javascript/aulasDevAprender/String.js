// string tipo primitivo
const saudacao = "Olá, amigos!";
// String tipo objeto
const saudacao2 = new String("Olá amigos");

console.log(saudacao2);
console.log(saudacao);
console.log(typeof(saudacao2));
console.log(typeof(saudacao));
// função para mostrar tamanho
console.log(saudacao.length);
console.log(saudacao2.length);
// função para separar as palavras
const truesalute = saudacao2.split(' ');
console.log(truesalute);
// funcão para substituir caracteres
let numero = "98-547896";
numero = numero.replace('-', ' ');
