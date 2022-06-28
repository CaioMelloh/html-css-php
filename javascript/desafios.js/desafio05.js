//receber uma quantidade de valores e informar com uma função se são pares ou impares

parOuImpar(5);
function parOuImpar(numero){
    for(let i = 0; i<= numero; i++){
       if(i % 2 == 0){
        console.log(i + " PAR");
       }
       else
       console.log(i + " IMPAR");
        
    }
}