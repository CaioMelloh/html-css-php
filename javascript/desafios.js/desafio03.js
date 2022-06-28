/*fizBuzz algoritmo*/
/*divisivel por 3 = fiz
divisivel por 5 = buzz
divisivel por 3 e 5 é = fizz buzz
n é um numero
n é divisivel por 3 e 5 = entrada*/

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof(entrada) != 'number'){
        console.log("Não é um número");
    }
    else if(entrada % 3 == 0 && !(entrada % 5 == 0)){
        console.log('Fizz');
    }
    else if( entrada % 5 == 0 && !(entrada % 3 == 0)){
        console.log('Buzz');
    }
    else if(entrada % 5 == 0 && entrada % 3 == 0){
        console.log('fizzBuzz');
    }
    else {
        console.log(entrada);

    }
   

}