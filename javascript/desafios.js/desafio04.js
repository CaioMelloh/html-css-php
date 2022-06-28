/*radar que mnulta acima de 70 km
a cd 5 km acima do limite você ganha 1 ponto na carteira*/

verificarVelocidade();

function verificarVelocidade(velocidade){
    const VelocidadePermitida = 70;
     
    if(velocidade > VelocidadePermitida){
        let quantPontos = Math.floor((velocidade - VelocidadePermitida) / 5);

        if(quantPontos > 12){
            console.log('Carteira Suspensa');
        }
        console.log(quantPontos);
   }
   else
    console.log('ok');
    
}