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

const limparId = (url) =>
  url.replace("./img/", "").split(".")[0].replace(" ", "-");

const criarItem = (urlImagem) => {
  const container = document.querySelector(".galeria-container");

  const novoLink = document.createElement("a");
  novoLink.href = `#${limparId(urlImagem)}`;
  novoLink.classList.add("galeria-items");
  novoLink.innerHTML = `<img src="${urlImagem}" alt="mario"></img>`;

  container.appendChild(novoLink);

  //   container.innerHTML += `
  //     <a href="${urlImagem}" class="galeria-items">
  //         <img src="${urlImagem}" alt="mario">
  //     </a>
  //     `;
};

const carregarGaleria = (imagens) => imagens.forEach(criarItem);

const criarSlide = (urlImagem, indice, arr) => {
  const container = document.querySelector(".slide-container");
  const novoDiv = document.createElement("div");
  novoDiv.classList.add("slide");
  novoDiv.id = limparId(urlImagem);

  const indiceAnterior = indice <= 0 ? arr.length - 1 : indice - 1;
  const idAnterior = limparId(arr[indiceAnterior]);

  const indicePosterior = indice >= arr.length - 1 ? 0 : indice + 1;
  const idPosterior = limparId(arr[indicePosterior]);

  novoDiv.innerHTML = `
        <div class="imagem-container">
          <a href="" class="icones fechar">&#10006;</a>
          <a href="#${idAnterior}" class="icones anterior">&#171;</a>
          <img src="${urlImagem}" alt="" />
          <a href="#${idPosterior}" class="icones proximo">&#187;</a>
        </div>
  `;

  container.appendChild(novoDiv);
};

const carregarSlide = (imagens) => imagens.forEach(criarSlide);

carregarGaleria(imagens);
carregarSlide(imagens);
