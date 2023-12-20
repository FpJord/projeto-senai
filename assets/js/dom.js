let listaProdutos = [
  {
    nome: "Chocker Coração de Prata",
    preço: "22",
    imagem: "assets/img/Chocker Coração.svg",
  },

  {
    nome: "Tornozeleira Sereia Prata",
    preço: "15",
    imagem: "assets/img/Tornozeleira Sereia.svg",
  },

  {
    nome: "Cordão Gravatinha com Letra",
    preço: "20",
    imagem: "assets/img/Cordão Gravatinha L.svg",
  },

  {
    nome: "Chocker Coração Dourado",
    preço: "22",
    imagem: "assets/img/Chocker Dourada.svg",
  },

  {
    nome: "Argola P Prata e Argola P Dourada",
    preço: "7",
    imagem: "assets/img/Argola P e M.svg",
  },

  {
    nome: "Brincos Pequenos, Vários Modelos",
    preço: "3",
    imagem: "assets/img/Brincos Pequenos.svg",
  },
];

listaProdutos.map((produto, posicao) => {
  let cardProduto = document.getElementById("first-dom");

  cardProduto.innerHTML += `
    <div class="product-card">
    <img src="${produto.imagem}" alt="" id="product-image">
    
    <h2>${produto.nome}</h2>
    <span>R$ ${produto.preço}.00</span>

    <Button class="teste" onClick="zoomProduct('${posicao}')">Comprar</Button>
</div>
`;

  console.log(posicao);
});

function zoomProduct(posicao){
    let productSelecionado = listaProdutos[posicao];
    document.getElementById("nome-produto").innerHTML = productSelecionado.nome;
    document.getElementById("imagem-produto").src = productSelecionado.imagem;

    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const number = document.querySelector(".number");
    const value = document.querySelector("#value-number");
  
    let a = 1;
    number.innerHTML = a;
  
    let b = productSelecionado.preço;
    value.innerHTML = b;
  
    plus.addEventListener("click", () => {
      a++;
  
      number.innerText = a;
  
      value.innerText = b * a;
    });
  
    minus.addEventListener("click", () => {
      if (a > 1) {
        a--;
        number.innerText = a;
  
        value.innerText = b * a;
      }
    });
  
    

 new bootstrap.Modal("#zoomProduct").show();
}


let listaRecomendancao = [
  {
    nome: "Cordão Pingente Menina",
    preço: "20",
    imagem: "assets/img/Pingente Menina.svg",
  },

  {
    nome: "Cordão de Aço Duplo Corações",
    preço: "27",
    imagem: "assets/img/Cordão Duplo Corações.svg",
  },

  {
    nome: "Chocker Escama de Peixe Dourada",
    preço: "22",
    imagem: "assets/img/Chocker Escama de Peixe.svg",
  },

  {
    nome: "Cordão Coração com Ponto de Luz Dourado",
    preço: "22",
    imagem: "assets/img/Ponto de Luz Dourado.svg",
  },

  {
    nome: "Argola M Prata",
    preço: "8",
    imagem: "assets/img/Argola M.svg",
  },

  {
    nome: "Argola M G Prata",
    preço: "10",
    imagem: "assets/img/Argola G.svg",
  },
];

listaRecomendancao.map((produto, posicao) => {
  let cardRecomendacao = document.getElementById("second-dom");

  cardRecomendacao.innerHTML += `
    <div class="product-card">
    <img src="${produto.imagem}" alt="" id="product-image">
    
    <h2>${produto.nome}</h2>
    <span>R$ ${produto.preço}.00</span>

    <Button class="teste" onClick="zoomRecomendacao('${posicao}')">Comprar</Button>
</div>
`;

  console.log(posicao);
});

function zoomRecomendacao(posicao) {
  let recSelecionado = listaRecomendancao[posicao];
  document.getElementById("nome-produto").innerHTML = recSelecionado.nome;
  document.getElementById("imagem-produto").src = recSelecionado.imagem;

  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  const number = document.querySelector(".number");
  const value = document.querySelector("#value-number");

  let a = 1;
  number.innerHTML = a;

  let b = recSelecionado.preço;
  value.innerHTML = b;

  plus.addEventListener("click", () => {
    a++;

    number.innerText = a;

    value.innerText = b * a;
  });

  minus.addEventListener("click", () => {
    if (a > 1) {
      a--;
      number.innerText = a;

      value.innerText = b * a;
    }
  });

  new bootstrap.Modal("#zoomProduct").show();
};
