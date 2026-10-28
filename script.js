const numeroWhatsapp = "5585900000000";

const iconeWhatsapp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.2-1.4A9.9 9.9 0 1 0 12.04 2zm5.8 14c-.25.7-1.4 1.3-1.95 1.35-.5.05-1.1.07-1.8-.12a14 14 0 0 1-1.6-.6c-2.8-1.2-4.6-4-4.75-4.2-.15-.2-1.1-1.5-1.1-2.8s.7-2 .95-2.25c.25-.3.55-.35.7-.35h.5c.15 0 .4-.05.6.45.25.55.8 1.9.85 2 .07.15.1.3 0 .5-.1.2-.15.3-.3.5-.15.15-.3.35-.45.5-.15.15-.3.3-.12.6.17.3.75 1.25 1.65 2 1.1.95 2 1.25 2.3 1.4.3.15.45.1.65-.07.2-.2.75-.85.95-1.15.2-.3.4-.25.65-.15.3.1 1.6.75 1.9.9.3.15.45.2.55.3.1.1.1.65-.15 1.3z"/></svg>';

const colecoes = [
  {
    id: "rosa",
    tema: "rosa",
    rotulo: "Rosa",
    cor: "#f2a7b3",
    titulo: "Vestidos rosa",
    frase: "Delicadeza em tule, renda e brilho",
    itens: [
      { imagem: "img/rosa-renda.jpg", nome: "Princesa rosa com renda floral" },
      { imagem: "img/rosa-pessego.jpg", nome: "Princesa pêssego com camadas" },
      { imagem: "img/rosa-antigo.jpg", nome: "Trio em rosa antigo" },
      { imagem: "img/rosa-vibrante.jpg", nome: "Trio em rosa vibrante" }
    ]
  },
  {
    id: "vermelho",
    tema: "vermelho",
    rotulo: "Vermelho",
    cor: "#b3122e",
    titulo: "Vestidos vermelhos",
    frase: "Presença e brilho para quem quer ser notada",
    itens: [
      { imagem: "img/vermelho-princesa.jpg", nome: "Princesa vermelha com brilho" },
      { imagem: "img/vermelho-gala.jpg", nome: "Trio vermelho de gala" }
    ]
  },
  {
    id: "azul",
    tema: "azul",
    rotulo: "Azul",
    cor: "#1c2f73",
    titulo: "Vestidos azul marinho",
    frase: "Elegância profunda, com bordados e camadas",
    itens: [
      { imagem: "img/azul-capa.jpg", nome: "Azul marinho com camadas e capa" },
      { imagem: "img/azul-bordado.jpg", nome: "Trio azul marinho bordado" }
    ]
  },
  {
    id: "lilas",
    tema: "lilas",
    rotulo: "Lilás",
    cor: "#b99be3",
    titulo: "Vestidos lilás",
    frase: "Suavidade em cetim, tule e renda",
    itens: [
      { imagem: "img/lilas-princesa.jpg", nome: "Princesa lilás com fitas" },
      { imagem: "img/lilas-trio.jpg", nome: "Trio lilás" }
    ]
  },
  {
    id: "amarelo",
    tema: "amarelo",
    rotulo: "Amarelo",
    cor: "#f4d44a",
    titulo: "Vestidos amarelos",
    frase: "Leveza e luz, também em fotos de clientes",
    itens: [
      { imagem: "img/amarelo-quarteto.jpg", nome: "Quarteto amarelo suave" },
      { imagem: "img/amarelo-cetim.jpg", nome: "Amarelo de cetim com corselet" },
      { imagem: "img/amarelo-longo.jpg", nome: "Amarelo longo com corselet" },
      { imagem: "img/amarelo-babados.jpg", nome: "Amarelo com babados" }
    ]
  },
  {
    id: "terracota",
    tema: "terracota",
    rotulo: "Terracota",
    cor: "#c4562b",
    titulo: "Vestidos terracota",
    frase: "Tons quentes para quem gosta de cor",
    itens: [
      { imagem: "img/terracota-trio.jpg", nome: "Trio terracota" }
    ]
  },
  {
    id: "verde",
    tema: "verde",
    rotulo: "Verde",
    cor: "#9bdcc3",
    titulo: "Vestidos verde menta",
    frase: "Fresco, delicado e diferente",
    itens: [
      { imagem: "img/verde-menta.jpg", nome: "Princesa verde menta com babados" }
    ]
  },
  {
    id: "preto",
    tema: "preto",
    rotulo: "Preto",
    cor: "#151517",
    titulo: "Vestidos pretos",
    frase: "O clássico que nunca sai de moda",
    itens: [
      { imagem: "img/preto-trio.jpg", nome: "Trio preto de festa" }
    ]
  }
];

function criarLinkWhatsapp(mensagem) {
  return "https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(mensagem);
}

function criarCartao(item) {
  const mensagem = "Olá! Vi o vestido " + item.nome + " no site da Miss Pontes e gostaria de saber mais.";

  return (
    '<article class="cartao">' +
      '<img src="' + item.imagem + '" alt="' + item.nome + '" loading="lazy">' +
      '<div class="cartao-corpo">' +
        "<h3>" + item.nome + "</h3>" +
        '<a class="cartao-botao" href="' + criarLinkWhatsapp(mensagem) + '" target="_blank" rel="noopener">' +
          iconeWhatsapp + "Quero este vestido" +
        "</a>" +
      "</div>" +
    "</article>"
  );
}

function criarColecao(colecao) {
  const cartoes = colecao.itens.map(criarCartao).join("");

  return (
    '<section class="colecao tema-' + colecao.tema + '" id="' + colecao.id + '">' +
      '<div class="colecao-interno">' +
        '<div class="colecao-topo">' +
          "<div>" +
            "<h2>" + colecao.titulo + "</h2>" +
            "<p>" + colecao.frase + "</p>" +
          "</div>" +
          '<div class="setas" hidden>' +
            '<button class="seta" data-direcao="-1" aria-label="Vestidos anteriores">‹</button>' +
            '<button class="seta" data-direcao="1" aria-label="Próximos vestidos">›</button>' +
          "</div>" +
        "</div>" +
        '<div class="faixa" data-qtd="' + colecao.itens.length + '">' + cartoes + "</div>" +
      "</div>" +
    "</section>"
  );
}

function construirColecoes() {
  document.getElementById("colecoes").innerHTML = colecoes.map(criarColecao).join("");
}

function construirBolinhas() {
  const bolinhas = colecoes.map(function (colecao) {
    return (
      '<a class="bolinha" href="#' + colecao.id + '">' +
        '<span class="bolinha-cor" style="background-color: ' + colecao.cor + '"></span>' +
        colecao.rotulo +
      "</a>"
    );
  });

  document.getElementById("bolinhas").innerHTML = bolinhas.join("");
}

function configurarLinksWhatsapp() {
  document.querySelectorAll("[data-whatsapp]").forEach(function (link) {
    link.href = criarLinkWhatsapp(link.dataset.whatsapp);
    link.target = "_blank";
    link.rel = "noopener";
  });

  document.querySelector(".whatsapp-flutuante").innerHTML = iconeWhatsapp;
}

function configurarFaixas() {
  const secoes = document.querySelectorAll(".colecao");

  function atualizarSetas() {
    secoes.forEach(function (secao) {
      const faixa = secao.querySelector(".faixa");
      const setas = secao.querySelector(".setas");
      setas.hidden = faixa.scrollWidth <= faixa.clientWidth + 4;
    });
  }

  secoes.forEach(function (secao) {
    const faixa = secao.querySelector(".faixa");

    secao.querySelectorAll(".seta").forEach(function (seta) {
      seta.addEventListener("click", function () {
        const direcao = Number(seta.dataset.direcao);
        faixa.scrollBy({ left: direcao * faixa.clientWidth, behavior: "smooth" });
      });
    });
  });

  window.addEventListener("resize", atualizarSetas);
  window.addEventListener("load", atualizarSetas);
  atualizarSetas();
}

function configurarMenu() {
  const botao = document.getElementById("hamburguer");
  const menu = document.getElementById("menu");

  function alternar(aberto) {
    menu.classList.toggle("aberto", aberto);
    botao.classList.toggle("aberto", aberto);
    botao.setAttribute("aria-expanded", String(aberto));
  }

  botao.addEventListener("click", function () {
    alternar(!menu.classList.contains("aberto"));
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      alternar(false);
    });
  });
}

function configurarParallax() {
  const topo = document.getElementById("topo");
  const fundo = document.getElementById("fundoParallax");
  const elementos = document.querySelectorAll("[data-velocidade]");
  let aguardando = false;

  function atualizar() {
    const rolagem = window.scrollY;
    const limite = window.innerHeight * 0.09;
    const deslocamentoFundo = Math.min(rolagem * 0.06, limite);

    fundo.style.transform = "translate3d(0, " + -deslocamentoFundo + "px, 0)";

    elementos.forEach(function (elemento) {
      const velocidade = Number(elemento.dataset.velocidade);
      const deslocamento = Math.min(rolagem, window.innerHeight) * velocidade;
      elemento.style.transform = "translate3d(0, " + deslocamento + "px, 0)";
    });

    topo.classList.toggle("rolado", rolagem > 10);
    aguardando = false;
  }

  window.addEventListener("scroll", function () {
    if (!aguardando) {
      aguardando = true;
      window.requestAnimationFrame(atualizar);
    }
  }, { passive: true });

  atualizar();
}

construirColecoes();
construirBolinhas();
configurarLinksWhatsapp();
configurarFaixas();
configurarMenu();
configurarParallax();