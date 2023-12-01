let listaProdutos = [
    {
        "nome": 'Chocker Coração de Prata',
        "preço": "R$ 22.00",
        "imagem": "assets/img/Cordão Coração.svg",
    },

    {
        "nome": 'Tornozeleira Sereia Prata',
        "preço": 'R$ 15.00',
        "imagem": "assets/img/sereia prata.svg",
    },

    {
        "nome": 'Cordão Gravatinha com Letra',
        "preço": 'R$ 20.00',
        "imagem": "assets/img/gravatinha l.svg",
    },

    {
        "nome": 'Chocker Coração Dourado',
        "preço": 'R$ 22.00',
        "imagem": 'assets/img/coração dourado.svg',
    },

    {
        "nome": 'Argola P Prata e Argola P Dourada',
        "preço": 'R$ 7.00',
        "imagem": 'assets/img/argola p e m.svg',
    },

    {
        "nome": 'Brincos Pequenos, Vários Modelos',
        "preço": 'R$ 3.00',
        "imagem": 'assets/img/brincos pequenos.svg',
    },
];

listaProdutos.map((produto) => {
    let cardProduto = document.getElementById("first-dom");

    cardProduto.innerHTML += `
    <div class="product-card">
    <img src="${produto.imagem}" alt="" id="product-image">
    
    <h2>${produto.nome}</h2>
    <span>${produto.preço}</span>

    <a href="#"><Button>Comprar</Button></a>
</div>
`
})