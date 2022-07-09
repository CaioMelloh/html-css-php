// manipulaçoes com arrays
// adicionando arrays no início 
const arrayOriginal = [0,1,2,3];

arrayOriginal.unshift(24);
// result = 24, 0 , 1 ,2 ,3
console.log(arrayOriginal);
// adicionando arrays no "meio" ou posição desejada
arrayOriginal.splice(1, 0, 4);
// result 24, 4, 0, 1, 2, 3
console.log(arrayOriginal);

// adicionando ao fim
arrayOriginal.push(8);
console.log(arrayOriginal)
// result 24, 4, 0, 1, 2, 3, 8