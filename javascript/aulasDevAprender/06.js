// operador ternário
// regra se maior de 15 -> assiste deadpool
// senao assiste lego world
let idade = 18;
let filme = idade > 15 ? 'deadpool' : 'lego world';
console.log(filme);

let altura = 184;
let permissao = !(altura > 184) ? 'permitido' : 'negado';
console.log(permissao);

//teste com and, or and not
//so será aceito se for de maior e pode votar
let condEleitoral = true;
let idaade = 17;
idaade = idaade > 17 ? true : false;
console.log(idaade);
let aptidao = condEleitoral && idaade;
console.log(aptidao);

// teste com or 
// apto se for portuga ou brasileiro
let nacionalidade = 'portuga';
if( (nacionalidade == 'portuga') || (nacionalidade == 'brasileiro')){
    console.log('lusófono')
}
else{
    console.log("You do not speak portuguese.");
}
//teste com ! not
//apto se  não estiver de carteira assinada e nunca ter assumido cargo público
let carteiraAssinada = false;
let cargoPublico = false;
let aptidaoDoNao = !(cargoPublico && carteiraAssinada);
console.log(aptidaoDoNao);
// valor truthy and falsy
/*falsy
 null , '', NaN, false, undefined, 0
 truthy -> td que n for falsy
 */
/*precisamos de alguem que toque um instrumento de corda na banda, violão será o padrão, mas buscamos um que toque baixo ou guitarra*/
let instrumentoCorda = 'Guitarra';
let instrumentoPadrao = 'Violão';
let Selecionado = instrumentoCorda || instrumentoPadrao;
console.log(Selecionado);