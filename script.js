// Dados dos produtos
const products = [
  // iPhone 15 Series
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    description: "256GB • Titânio Natural",
    series: "15",
    brazilPrice: 10499,
    importPrice: 7999,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+15+Pro+Max",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "128GB • Titânio Azul",
    series: "15",
    brazilPrice: 8999,
    importPrice: 6999,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+15+Pro",
  },
  {
    id: 3,
    name: "iPhone 15 Plus",
    description: "128GB • Rosa",
    series: "15",
    brazilPrice: 7299,
    importPrice: 5499,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+15+Plus",
  },
  {
    id: 4,
    name: "iPhone 15",
    description: "128GB • Preto",
    series: "15",
    brazilPrice: 6499,
    importPrice: 4999,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+15",
  },
  // iPhone 14 Series
  {
    id: 5,
    name: "iPhone 14 Pro Max",
    description: "256GB • Roxo Profundo",
    series: "14",
    brazilPrice: 7999,
    importPrice: 5999,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+14+Pro+Max",
  },
  {
    id: 6,
    name: "iPhone 14 Pro",
    description: "128GB • Dourado",
    series: "14",
    brazilPrice: 6799,
    importPrice: 4999,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+14+Pro",
  },
  {
    id: 7,
    name: "iPhone 14 Plus",
    description: "128GB • Azul",
    series: "14",
    brazilPrice: 5799,
    importPrice: 4299,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+14+Plus",
  },
  {
    id: 8,
    name: "iPhone 14",
    description: "128GB • Vermelho",
    series: "14",
    brazilPrice: 5299,
    importPrice: 3999,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+14",
  },
  // iPhone 13 Series
  {
    id: 9,
    name: "iPhone 13 Pro",
    description: "128GB • Grafite",
    series: "13",
    brazilPrice: 5199,
    importPrice: 3799,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+13+Pro",
  },
  {
    id: 10,
    name: "iPhone 13",
    description: "128GB • Verde",
    series: "13",
    brazilPrice: 4199,
    importPrice: 2999,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+13",
  },
  {
    id: 11,
    name: "iPhone 13 mini",
    description: "128GB • Rosa",
    series: "13",
    brazilPrice: 3699,
    importPrice: 2599,
    image: "https://via.placeholder.com/200x200/f0f0f0/333?text=iPhone+13+mini",
  },
]

// Sistema de favoritos
const favorites = JSON.parse(localStorage.getItem("g10-favorites")) || []

// Elementos DOM
const searchInput = document.getElementById("searchInput")
const seriesFilter = document.getElementById("seriesFilter")
const priceFilter = document.getElementById("priceFilter")
const clearFiltersBtn = document.getElementById("clearFilters")
const showFavoritesBtn = document.getElementById("showFavorites")
const favoritesCount = document.getElementById("favoritesCount")
const whatsappBtn = document.getElementById("whatsappBtn")
const calculatorModel = document.getElementById("calculatorModel")
const calculateBtn = document.getElementById("calculateBtn")
const calculatorResult = document.getElementById("calculatorResult")
const resultContent = document.getElementById("resultContent")
const favoritesModal = document.getElementById("favoritesModal")
const closeFavoritesModal = document.getElementById("closeFavoritesModal")
const favoritesModalBody = document.getElementById("favoritesModalBody")

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderProducts()
  populateCalculatorOptions()
  updateFavoritesCount()
  setupEventListeners()
})

// Event Listeners
function setupEventListeners() {
  searchInput.addEventListener("input", filterProducts)
  seriesFilter.addEventListener("change", filterProducts)
  priceFilter.addEventListener("change", filterProducts)
  clearFiltersBtn.addEventListener("click", clearFilters)
  showFavoritesBtn.addEventListener("click", showFavoritesModal)
  closeFavoritesModal.addEventListener("click", hideFavoritesModal)
  whatsappBtn.addEventListener("click", openWhatsApp)
  calculateBtn.addEventListener("click", calculateEconomy)

  // Fechar modal clicando fora
  favoritesModal.addEventListener("click", (e) => {
    if (e.target === favoritesModal) {
      hideFavoritesModal()
    }
  })
}

// Renderizar produtos
function renderProducts(productsToRender = products) {
  const grids = {
    15: document.getElementById("iphone15Grid"),
    14: document.getElementById("iphone14Grid"),
    13: document.getElementById("iphone13Grid"),
  }

  // Limpar grids
  Object.values(grids).forEach((grid) => {
    if (grid) grid.innerHTML = ""
  })

  // Agrupar produtos por série
  const productsBySeries = productsToRender.reduce((acc, product) => {
    if (!acc[product.series]) acc[product.series] = []
    acc[product.series].push(product)
    return acc
  }, {})

  // Renderizar cada série
  Object.entries(productsBySeries).forEach(([series, seriesProducts]) => {
    const grid = grids[series]
    if (grid) {
      seriesProducts.forEach((product) => {
        grid.appendChild(createProductCard(product))
      })
    }
  })

  // Esconder seções vazias
  Object.entries(grids).forEach(([series, grid]) => {
    const section = grid.closest(".series-section")
    if (section) {
      section.style.display = productsBySeries[series] ? "block" : "none"
    }
  })
}

// Criar card do produto
function createProductCard(product) {
  const savings = product.brazilPrice - product.importPrice
  const savingsPercentage = ((savings / product.brazilPrice) * 100).toFixed(0)
  const isFavorite = favorites.includes(product.id)

  const card = document.createElement("div")
  card.className = "product-card"
  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="description">${product.description}</p>
        <div class="price-section">
            <div class="current-price">R$ ${product.importPrice.toLocaleString("pt-BR")}</div>
            <div class="original-price">R$ ${product.brazilPrice.toLocaleString("pt-BR")} (Brasil)</div>
            <div class="savings-badge">Economia de R$ ${savings.toLocaleString("pt-BR")}</div>
        </div>
        <div class="product-actions">
            <button class="favorite-btn ${isFavorite ? "active" : ""}" onclick="toggleFavorite(${product.id})">
                <i class="fas fa-heart"></i>
            </button>
            <button class="btn btn-primary buy-btn">Comprar Agora</button>
        </div>
    `
  return card
}

// Sistema de favoritos
function toggleFavorite(productId) {
  const index = favorites.indexOf(productId)
  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(productId)
  }

  localStorage.setItem("g10-favorites", JSON.stringify(favorites))
  updateFavoritesCount()
  renderProducts(getFilteredProducts())
}

function updateFavoritesCount() {
  favoritesCount.textContent = favorites.length
}

// Filtros
function filterProducts() {
  const filteredProducts = getFilteredProducts()
  renderProducts(filteredProducts)
}

function getFilteredProducts() {
  let filtered = [...products]

  // Filtro de busca
  const searchTerm = searchInput.value.toLowerCase()
  if (searchTerm) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
    )
  }

  // Filtro de série
  const selectedSeries = seriesFilter.value
  if (selectedSeries) {
    filtered = filtered.filter((product) => product.series === selectedSeries)
  }

  // Filtro de preço
  const maxPrice = Number.parseInt(priceFilter.value)
  if (maxPrice) {
    filtered = filtered.filter((product) => product.importPrice <= maxPrice)
  }

  return filtered
}

function clearFilters() {
  searchInput.value = ""
  seriesFilter.value = ""
  priceFilter.value = ""
  renderProducts()
}

// Modal de favoritos
function showFavoritesModal() {
  const favoriteProducts = products.filter((product) => favorites.includes(product.id))

  if (favoriteProducts.length === 0) {
    favoritesModalBody.innerHTML = `
            <div class="empty-favorites">
                <i class="fas fa-heart"></i>
                <p>Você ainda não tem produtos favoritos.</p>
                <p>Clique no coração dos produtos para adicioná-los aos favoritos!</p>
            </div>
        `
  } else {
    favoritesModalBody.innerHTML = `
            <div class="favorites-grid">
                ${favoriteProducts
                  .map(
                    (product) => `
                    <div class="favorite-item">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="favorite-info">
                            <h4>${product.name}</h4>
                            <p>${product.description}</p>
                            <p class="favorite-price">R$ ${product.importPrice.toLocaleString("pt-BR")}</p>
                        </div>
                        <button class="remove-favorite" onclick="removeFavorite(${product.id})">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        `
  }

  favoritesModal.classList.add("active")
}

function hideFavoritesModal() {
  favoritesModal.classList.remove("active")
}

function removeFavorite(productId) {
  toggleFavorite(productId)
  showFavoritesModal() // Atualizar modal
}

// Calculadora de economia
function populateCalculatorOptions() {
  calculatorModel.innerHTML = '<option value="">Selecione um modelo</option>'
  products.forEach((product) => {
    const option = document.createElement("option")
    option.value = product.id
    option.textContent = `${product.name} - ${product.description}`
    calculatorModel.appendChild(option)
  })
}

function calculateEconomy() {
  const selectedProductId = Number.parseInt(calculatorModel.value)
  if (!selectedProductId) return

  const product = products.find((p) => p.id === selectedProductId)
  if (!product) return

  const savings = product.brazilPrice - product.importPrice
  const savingsPercentage = ((savings / product.brazilPrice) * 100).toFixed(1)

  resultContent.innerHTML = `
        <div class="result-details">
            <div class="result-model">${product.name}</div>
            <div class="price-comparison brazil">
                <span>Preço no Brasil:</span>
                <span>R$ ${product.brazilPrice.toLocaleString("pt-BR")}</span>
            </div>
            <div class="price-comparison import">
                <span>Preço G10 Imports:</span>
                <span>R$ ${product.importPrice.toLocaleString("pt-BR")}</span>
            </div>
            <div class="price-comparison savings">
                <span>Sua Economia:</span>
                <div class="savings-details">
                    <div class="savings-amount">R$ ${savings.toLocaleString("pt-BR")}</div>
                    <div class="savings-percentage">(${savingsPercentage}% de desconto)</div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 24px;">
                <button class="btn btn-secondary">Solicitar Orçamento</button>
            </div>
        </div>
    `
}

// WhatsApp
function openWhatsApp() {
  const phoneNumber = "5511999999999" // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre os iPhones importados da G10 Imports."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animações de scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".product-card, .advantage-card, .testimonial-card")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Inicializar animações
document.addEventListener("DOMContentLoaded", () => {
  // Preparar elementos para animação
  const elements = document.querySelectorAll(".product-card, .advantage-card, .testimonial-card")
  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  // Executar animações
  animateOnScroll()
  window.addEventListener("scroll", animateOnScroll)
})
