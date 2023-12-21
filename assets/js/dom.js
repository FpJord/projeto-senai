let listaProdutos = [
  {
    nome: "Chocker Coração de Prata ",
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
    nome: "Chocker Coração Dourado <br> <br>  ",
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

function zoomProduct(posicao) {
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
    nome: "Cordão Pingente Menina <br> <br>",
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
    nome: "Argola M Prata <br> <br>",
    preço: "8",
    imagem: "assets/img/Argola M.svg",
  },

  {
    nome: "Argola G Prata <br> <br>",
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
}

let listaCordoes = [
  {
    nome: "Cordão Coração Dourado",
    preço: "22",
    imagem: "assets/img/Chocker Dourada.svg",
  },

  {
    nome: "Cordão de Aço Duplo Corações",
    preço: "27",
    imagem: "assets/img/Cordão Duplo Corações.svg",
  },

  {
    nome: "Cordão Gravatinha com Letra",
    preço: "20",
    imagem: "assets/img/Cordão Gravatinha L.svg",
  },

  {
    nome: "Cordão Pingente Menina",
    preço: "20",
    imagem: "assets/img/Pingente Menina.svg",
  },

  {
    nome: "Cordão Coração com Ponto de Luz Dourado",
    preço: "22",
    imagem: "assets/img/Cordao coracao com ponto de luz dourado.svg",
  },

  {
    nome: "Cordão Coração de Prata",
    preço: "22",
    imagem: "assets/img/Chocker Coração.svg",
  },

  {
    nome: "Cordão Escama de Peixe Dourada",
    preço: "22",
    imagem: "assets/img/Chocker Escama de Peixe.svg",
  },

  {
    nome: "Chocker Ponto de Luz",
    preço: "22",
    imagem: "assets/img/Chocker Ponto de Luz.svg",
  },

  {
    nome: "Cordão Cobra Dourado",
    preço: "22",
    imagem: "assets/img/Cordão Cobra Dourado.svg",
  },

  {
    nome: "Cordão Gratidão Aço",
    preço: "20",
    imagem: "assets/img/Cordão Gratidão Aço.svg",
  },

  {
    nome: "Cordão Nossa Senhora Aço",
    preço: "20",
    imagem: "assets/img/Chocker Dourada.svg",
  },

  {
    nome: "Cordão Borboletas Aço",
    preço: "20",
    imagem: "assets/img/Cordão Borboletas Aço.svg",
  },
];





let listaAnel = [

  {
    nome: "Anel Coração",
    preço: "12",
    imagem: "assets/img/Anel Coração.svg",
  },

  {
    nome: "Anel Estrela",
    preço: "12",
    imagem: "assets/img/Anel Estrela.svg",
  },

  {
    nome: "Anel Pérola com Coração",
    preço: "12",
    imagem: "assets/img/Anel Pérola com Coração.svg",
  },

  {
    nome: "Anel Borboleta Dourado",
    preço: "15",
    imagem: "assets/img/Anel Borboleta Dourado.svg",
  },

  {
    nome: "Anel Calda de Sereia Aço",
    preço: "15",
    imagem: "assets/img/Anel Calda de Sereia Aço.svg",
  },

  {
    nome: "Anel Falange Duplo Aço",
    preço: "12",
    imagem: "assets/img/Anel Falange Duplo Aço.svg",
  },

];

listaAnel.map((produto, posicao) => {
  let cardProduto = document.getElementById("dom-anel");

  cardProduto.innerHTML += `
    <div class="product-card">
    <img src="${produto.imagem}" alt="" id="product-image">
    
    <h2>${produto.nome}</h2>
    <span>R$ ${produto.preço}.00</span>

    <Button class="teste" onClick="zoomAnel('${posicao}')">Comprar</Button>
</div>
`;
  console.log(posicao);
});

function zoomAnel(posicao) {
  let anelSelecionado = listaAnel[posicao];
  document.getElementById("nome-produto").innerHTML = anelSelecionado.nome;
  document.getElementById("imagem-produto").src = anelSelecionado.imagem;

  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  const number = document.querySelector(".number");
  const value = document.querySelector("#value-number");

  let a = 1;
  number.innerHTML = a;

  let b = anelSelecionado.preço;
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

let listaBrinco = [

  {
    nome: "Argola Click Coração Dourado",
    preço: "10",
    imagem: "assets/img/Argola Click Coração Dourado.svg",
  },

  {
    nome: "Argola Click Coração Prata",
    preço: "10",
    imagem: "assets/img/Argola Click Cpração Prata.svg",
  },

  {
    nome: "Argola G Prata",
    preço: "8",
    imagem: "assets/img/Argola G.svg",
  },

  {
    nome: "Argola M Prata",
    preço: "10",
    imagem: "assets/img/Argola M.svg",
  },

  {
    nome: "Argola P Prata e Argola P Dourada",
    preço: "7",
    imagem: "assets/img/Argola P e M.svg",
  },

  {
    nome: "Argolas Premium",
    preço: "18",
    imagem: "assets/img/brincos pequenos.svg",
  },

]

let listaTornozeleira = [

  {
    nome: "Pulseira Olho Grego",
    preço: "18",
    imagem: "assets/img/Pulseira olho grego.svg",
  },
  
  {
    nome: "Pulseira Infatil",
    preço: "18",
    imagem: "assets/img/Pulseira Infantil.svg",
  },

  {
    nome: "Tornozeleira Sereia Prata",
    preço: "15",
    imagem: "assets/img/Tornozeleira Sereia.svg",
  },

  {
    nome: "Tornozeleira",
    preço: "15",
    imagem: "assets/img/Tornozeleira.svg",
  },

];
