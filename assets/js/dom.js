let listaProdutos = [
    {
        "nome": 'Chocker Coração de Prata',
        "preço": "R$ 22.00",
        "imagem": "assets/img/Chocker Coração.svg",
    },

    {
        "nome": 'Tornozeleira Sereia Prata',
        "preço": 'R$ 15.00',
        "imagem": "assets/img/Tornozeleira Sereia.svg",
    },

    {
        "nome": 'Cordão Gravatinha com Letra',
        "preço": 'R$ 20.00',
        "imagem": "assets/img/Cordão Gravatinha L.svg",
    },

    {
        "nome": 'Chocker Coração Dourado',
        "preço": 'R$ 22.00',
        "imagem": 'assets/img/Chocker Dourada.svg',
    },

    {
        "nome": 'Argola P Prata e Argola P Dourada',
        "preço": 'R$ 7.00',
        "imagem": 'assets/img/Argola P e M.svg',
    },

    {
        "nome": 'Brincos Pequenos, Vários Modelos',
        "preço": 'R$ 3.00',
        "imagem": 'assets/img/Brincos Pequenos.svg',
    },
];

listaProdutos.map((produto, posicao) => {
    let cardProduto = document.getElementById("first-dom");

    cardProduto.innerHTML += `
    <div class="product-card">
    <img src="${produto.imagem}" alt="" id="product-image">
    
    <h2>${produto.nome}</h2>
    <span>${produto.preço}</span>

    <Button class="teste">Comprar</Button>
</div>
`

console.log(posicao)
});



let listaRecomendancao = [
    {
        "nome": 'Cordão Pingente Menina',
        "preço": 'R$ 20.00',
        "imagem": 'assets/img/Pingente Menina.svg'
        
    },

    {
        "nome": 'Cordão de Aço Duplo Corações',
        "preço": 'R$ 27.00',
        "imagem": 'assets/img/Cordão Duplo Corações.svg'
        
    },
    
    {
        "nome": 'Chocker Escama de Peixe Dourada',
        "preço": 'R$ 22.00',
        "imagem": 'assets/img/Chocker Escama de Peixe.svg'
        
    },
    
    {
        "nome": 'Cordão Coração com Ponto de Luz Dourado',
        "preço": 'R$ 22.00',
        "imagem": 'assets/img/Ponto de Luz Dourado.svg'
        
    },
    
    {
        "nome": 'Argola M Prata',
        "preço": 'R$ 8.00',
        "imagem": 'assets/img/Argola M.svg'
        
    },
    
    {
        "nome": 'Argola M G Prata',
        "preço": 'R$ 10.00',
        "imagem": 'assets/img/Argola G.svg'
        
    },
    
];

listaRecomendancao.map((produto, posicao) => {
    let cardRecomendacao = document.getElementById("second-dom");

    cardRecomendacao.innerHTML += `
    <div class="product-card">
    <img src="${produto.imagem}" alt="" id="product-image">
    
    <h2>${produto.nome}</h2>
    <span>${produto.preço}</span>

    <Button class="teste" onClick="zoomRecomendacao('${posicao}')">Comprar</Button>
</div>
`

console.log(posicao)
});

function zoomRecomendacao(posicao){
    let recSelecionado = listaRecomendancao[posicao];
    document.getElementById("nome-produto").innerHTML = recSelecionado.nome;
    document.getElementById("imagem-produto").src = recSelecionado.imagem;

    new boostrap.Modal('#zoomProduct').show();

}




