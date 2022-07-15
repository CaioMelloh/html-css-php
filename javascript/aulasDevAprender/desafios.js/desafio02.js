/*uma função que usa dois números e retorna o maior entre eles*/
/*aprimorar para 3*/

/*let maior;
function maiorEntreEles(a, b){
    if(a>b){
        maior = a;
    }
    else{
        maior = b;
    }
    return maior;
}
console.log(maiorEntreEles(4,8));*/ 


/*utilizando o operador ternario*/
function maiorEntreDois(a,b){
    let maior = a > b ? a : b ;
    return maior;
}

console.log(maiorEntreDois(88, 99));

/*aprimoramento*/
let maior;
function maiorEntreEles(a, b, c){
    if(a<b || a<c){
        maior = b;
        if(b<c){
            maior = c;
        }
    }
    else{
        maior = a;
    }
    return maior;
}
console.log(maiorEntreEles(8, 2, 4));