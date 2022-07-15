// forma abreviada sem utilizar o function

const passaros = [
    {nome: 'tobias', cor: 'azul'},
    {nome: 'marquito', cor:'vermelho'}
];

const FindaBird = passaros.find((penas) => {return penas.cor === 'azul'} );

console.log(FindaBird);