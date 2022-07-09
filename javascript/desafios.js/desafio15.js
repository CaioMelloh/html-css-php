// utilizando um construtor, criar um objeto postagem com titulo, mensagem, autor, visualizações, comentarios, estaAovivo

function construirPostagens(titulo, mensagem, autor, visualizacoes, comentarios, estaAoVivo){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.visualizacoes = visualizacoes,
    this.estaAoVivo = estaAoVivo, 
    this.comentarios = comentarios
};
let postagem01 = construirPostagens('Coby', 'olá, amigos!', 'Josh gudanbard', 51100, 'bom', true);

