let horario = 18;
let saudacao = '';
if ((horario >= 6) && (horario <=12)){
    saudacao = 'Bom dia!';
}
else if(horario<=18){
    saudacao = "Boa Tarde";
}
else{
    saudacao = "Boa noite!";
}
console.log(saudacao);

// switch case
let permissaoDeAcesso = 'gerente';

switch(permissaoDeAcesso){
    case 'comum':
        console.log('Bem-vindo cara');
        break;
    
    case 'gerente':
        console.log('Olá, gerente!');
        break;

    case 'Boss':
        console.log("Um lindo dia, não é?");
        break;

    default:
        console.log("Voce n está cadastrado amigo!");
}