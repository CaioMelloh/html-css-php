//laço for (quando se sabe o numero de vzs)
/*imprimir numeros impares de um a 10*/

/*for(let i = 10; i>=1; i--){
    if(i % 2 != 0){
        console.log(i);
    }

}*/
console.log('teste');

// laço while
// let arthur = 10;
// while (arthur < 22){
//     console.log(arthur + ' Arthurs incomodam muita gente')
//     console.log('.. '+ (arthur+1) + ' Arhturs incomodam muito mais!');
//     arthur+= 2;
// }
// console.log("Brincadeira");

//do while
let i = 4
 do {
    console.log('vou executar pelo menos uma vez');
    i++;
 }while(i<8);

 /*laço for in
para iterar propriedades um objeto ou elementos de uma array*/
const pessoa={
    nome: 'Carlitos',
    idade: 25
};

for(let atributo in pessoa){
    console.log(atributo, pessoa['nome']);
} 
let cores = ['Vermelho', 'Verde', 'Azul'];
for(let indice in cores){
    console.log(indice, cores[indice]);
}

/*laço for of*/
let diasDaSemana = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

for(let dias of diasDaSemana){
    console.log(dias);
}