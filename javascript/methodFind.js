// encontrar um elemnto do tipo referencia 

const gatos =[
    { nome:'mike', idade:2},
    {nome: 'garfield', idade: 4}
];

const buscaFelino = gatos.find(function(felino){
    return felino.nome === 'mike'
});

console.log(buscaFelino);