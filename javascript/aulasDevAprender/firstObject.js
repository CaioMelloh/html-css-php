// objetos em javaScript são dinâmicos, o que significa que seus atributos e métodos podem ser alterados mesmo após a criação do objeto

let livro = {
    capa: 'DOis',
    roteiro: "Jef Loeb"
};

livro.nome = "Batman o longo dia das Bruxas";
delete livro.nome;
console.log(livro);
