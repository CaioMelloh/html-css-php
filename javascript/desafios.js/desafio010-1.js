// mostrar todos os números primos que existem no intervalo até o numero informado
// ex : 5 = 2 , 3, 5

mostrarPrimos(17);

function mostrarPrimos(numero){
    
    for(let i = 2; i<=numero; i++){
        let divisor = 0;
        for(let j = 2; j<=i; j++){
            if( i % j == 0){
                divisor++;
            }
        }
        if(divisor<2){
            console.log(i);
        }
        
    }
}