"use strict";

const imagens = [
  "./img/mario.png",
  "./img/luigi.png",
  "./img/peach.png",
  "./img/browser.png",
  "./img/yoshi.png",
  "./img/koopa-troopa.png",
  "./img/wario.png",
  "./img/waluigi.png",
];

// MAP - FILTER - REDUCE -> Declarativa

const criarItem = (urlImagem) => {
  const container = document.querySelector(".galeria-container");

  const novoLink = document.createElement("a");
  novoLink.href = urlImagem;
  novoLink.classList.add("galeria-items");
  novoLink.innerHTML = `<img src="${urlImagem}" alt="mario"></img>`;

  container.appendChild(novoLink);

  //   container.innerHTML += `
  //     <a href="${urlImagem}" class="galeria-items">
  //         <img src="${urlImagem}" alt="mario">
  //     </a>
  //     `;
};

const carregarImagens = () => imagens.forEach(criarItem);

carregarImagens();
