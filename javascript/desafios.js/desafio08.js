// criar uma função que recebe uma array e retorna uma nota correspondente a esse array
// 0-59: F
// 60-69 - D
// 70 - 79 - C
// 80 89 - b
// 90 - 100 - a


const array = [ 75, 88, 93];

function mediaFinal(soma){
    soma = mediaDasNotas(array);
    // utilizando o princípio da delegação e usando uma função dentro de outra.

    if( soma <= 59) return 'F';
    
    else if(soma <= 69) return 'D';
    // há a possibilidade de usar ifs ao invés de else if

    else if(soma <= 79) return 'C';

    else if(soma<=89) return 'B';
    
    else return 'A';
    

}

function mediaDasNotas(notas){
    let soma = 0;
    
    for (let note of notas) {
        soma += note;
        
    }
    soma /= (notas.length);
    soma = Math.floor(soma);
    return soma;
}

console.log(mediaFinal(array));