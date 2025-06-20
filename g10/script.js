let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function renderFavoritosContador() {
  const count = favoritos.length;
  let counter = document.getElementById("favoritos-contador");
  if (!counter) {
    const span = document.createElement("span");
    span.id = "favoritos-contador";
    span.style.marginLeft = "10px";
    span.style.fontWeight = "bold";
    document.querySelector(".header .btn").insertAdjacentElement("afterend", span);
    counter = span;
  }
  counter.textContent = `❤️ ${count}`;
}

function salvarFavoritos() {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  renderFavoritosContador();
}

function toggleFavorito(produto) {
  const index = favoritos.findIndex(fav => fav.name === produto.name);
  if (index === -1) {
    favoritos.push(produto);
  } else {
    favoritos.splice(index, 1);
  }
  salvarFavoritos();
  alert("Favorito atualizado!");
}

document.querySelector(".header").insertAdjacentHTML("beforeend", `
  <button id="ver-favoritos" class="btn">Ver Favoritos</button>
`);

document.getElementById("ver-favoritos").addEventListener("click", () => {
  const lista = favoritos.map(p => `${p.name} - R$ ${p.importPrice}`).join("\n");
  alert("Seus favoritos:\n\n" + (lista || "Nenhum produto salvo."));
});

products.forEach(produto => {
  const card = [...document.querySelectorAll(".produto-card")].find(c => c.innerHTML.includes(produto.name));
  const btn = document.createElement("button");
  btn.innerHTML = "❤️";
  btn.style.border = "none";
  btn.style.background = "transparent";
  btn.style.cursor = "pointer";
  btn.title = "Adicionar aos favoritos";
  btn.onclick = () => toggleFavorito(produto);
  card.appendChild(btn);
});

renderFavoritosContador();
