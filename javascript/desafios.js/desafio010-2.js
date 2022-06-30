
verificarPrimos(7);
function verificarPrimos(numero){

    
    for(let i = 2; i<=numero; i++){
            if (encontrarDivisores(i)) console.log(i);
        }
        
    }


function encontrarDivisores(i){
    
    for(let j = 2; j<i; j++){
        if(i % j === 0){
            return false;
        }
        
    }
    return true;
}

