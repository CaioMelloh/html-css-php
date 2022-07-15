const numeros1 = [1,2,3,4];
const numeros2 = [5,6,7,8];

const combinado = [...numeros1,'%',...numeros2];
console.log(combinado);

const clone = [...combinado];
console.log(clone);
// clonando arrays e combinando elemntos com o spread