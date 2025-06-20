// Dados de produtos (fictícios)
const products = [
    { id: 1, series: '15', model: 'iPhone 15', price: 4999.00, marketPrice: 6499.00 },
    { id: 2, series: '15', model: 'iPhone 15 Pro', price: 7499.00, marketPrice: 9499.00 },
    { id: 3, series: '14', model: 'iPhone 14', price: 3999.00, marketPrice: 5499.00 },
    { id: 4, series: '14', model: 'iPhone 14 Pro', price: 5999.00, marketPrice: 7999.00 },
    { id: 5, series: '13', model: 'iPhone 13', price: 2999.00, marketPrice: 4499.00 },
    { id: 6, series: '13', model: 'iPhone 13 Pro', price: 4499.00, marketPrice: 5999.00 }
];

let favorites = [];

const renderProducts = () => {
    const seriesGrids = {
        '15': document.getElementById('iphone15Grid'),
        '14': document.getElementById('iphone14Grid'),
        '13': document.getElementById('iphone13Grid')
    };

    Object.keys(seriesGrids).forEach(series => {
        seriesGrids[series].innerHTML = '';
        products
            .filter(p => p.series === series)
            .forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="https://via.placeholder.com/250x200" alt="${product.model}">
                    <h4>${product.model}</h4>
                    <p class="price">R$ ${product.price.toFixed(2)}</p>
                    <button class="btn btn-favorite" data-id="${product.id}">
                        <i class="fas fa-heart${favorites.includes(product.id) ? '' : '-o'}"></i>
                    </button>
                `;
                seriesGrids[series].appendChild(productCard);

                productCard.querySelector('.btn-favorite').addEventListener('click', () => toggleFavorite(product.id));
            });
    });
    updateFavoritesCount();
};

const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
    }
    renderProducts();
    renderFavoritesModal();
};

const updateFavoritesCount = () => {
    document.getElementById('favoritesCount').textContent = favorites.length;
};

const renderFavoritesModal = () => {
    const modalBody = document.getElementById('favoritesModalBody');
    modalBody.innerHTML = favorites.length ? 
        favorites.map(id => {
            const product = products.find(p => p.id === id);
            return `<div class="favorite-item">${product.model} - R$ ${product.price.toFixed(2)}</div>`;
        }).join('') : '<p>Nenhum favorito adicionado.</p>';
};

const filterProducts = () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const seriesFilter = document.getElementById('seriesFilter').value;
    const priceFilter = parseFloat(document.getElementById('priceFilter').value);

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.model.toLowerCase().includes(searchTerm);
        const matchesSeries = !seriesFilter || product.series === seriesFilter;
        const matchesPrice = !priceFilter || product.price <= priceFilter;
        return matchesSearch && matchesSeries && matchesPrice;
    });

    products.forEach(p => {
        const card = document.querySelector(`.product-card h4:contains("${p.model}")`);
        if (card) card.closest('.product-card').style.display = filteredProducts.some(fp => fp.id === p.id) ? 'block' : 'none';
    });
};

const clearFilters = () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('seriesFilter').value = '';
    document.getElementById('priceFilter').value = '';
    renderProducts();
};

const setupCalculator = () => {
    const calculatorModel = document.getElementById('calculatorModel');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.model;
        calculatorModel.appendChild(option);
    });

    document.getElementById('calculateBtn').addEventListener('click', () => {
        const productId = parseInt(calculatorModel.value);
        const product = products.find(p => p.id === productId);
        if (product) {
            const savings = product.marketPrice - product.price;
            const percentageSavings = ((savings / product.marketPrice) * 100).toFixed(1);
            document.getElementById('resultContent').innerHTML = `
                <p>Preço de Mercado: R$ ${product.marketPrice.toFixed(2)}</p>
                <p>Preço G10 Imports: R$ ${product.price.toFixed(2)}</p>
                <p>Economia: R$ ${savings.toFixed(2)} (${percentageSavings}%)</p>
            `;
        }
    });
};

document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('seriesFilter').addEventListener('change', filterProducts);
document.getElementById('priceFilter').addEventListener('change', filterProducts);
document.getElementById('clearFilters').addEventListener('click', clearFilters);
document.getElementById('showFavorites').addEventListener('click', () => document.getElementById('favoritesModal').style.display = 'block');
document.getElementById('closeFavoritesModal').addEventListener('click', () => document.getElementById('favoritesModal').style.display = 'none');
document.getElementById('whatsappBtn').addEventListener('click', () => window.open('https://wa.me/11999999999', '_blank'));

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupCalculator();
    renderFavoritesModal();
});