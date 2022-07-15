// function factory em JS

// ao criar diversos objetos do mesmo tipo acabmos nos deparando com duas possibilidades, criar um escopo de objeto e copiar e colar quantas vzs quisermos( nada prático), ou podemos usar o factory function

function criarLivros(nomeAutor, editora, modelo, pag){

    return{
    nomeAutor,
    editora,
    modelo,
    marcarPagina(){
        console.log("Marcando página " + pag);
        }
    }
}

const livro1 = criarLivros('Marco Aurelio', 'ediPro', 'capa dura', 88);
console.log(livro1);
livro1.marcarPagina(88);
