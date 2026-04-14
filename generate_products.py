import random

brands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Asics', "Levi's", 'H&M', 'Zara', 'Gucci', 'Louis Vuitton', 'Chanel', 'Prada', 'Balenciaga', 'Supreme', 'Off-White']

categories = ['Женская одежда', 'Мужская одежда', 'Женская обувь', 'Мужская обувь', 'Женские аксессуары', 'Мужские аксессуары']

titles = {
    'Женская одежда': ['Платье', 'Блузка', 'Юбка', 'Джинсы', 'Топ', 'Кардиган', 'Шорты', 'Свитер', 'Леггинсы', 'Пиджак', 'Брюки', 'Куртка', 'Футболка', 'Сарафан', 'Жакет', 'Майка', 'Комбинезон', 'Пончо', 'Боди', 'Туника', 'Шуба', 'Пальто', 'Ветровка', 'Купальник', 'Пижама', 'Халат', 'Блейзер', 'Ромпер', 'Кимоно', 'Бодикон', 'Свитшот', 'Топ с бретелями', 'Юбка мини', 'Платье вечернее', 'Брюки широкие', 'Футболка с принтом', 'Кардиган длинный', 'Шорты укороченные', 'Свитер с горлом', 'Леггинсы с карманами', 'Пиджак короткий', 'Брюки кожаные', 'Футболка длинная', 'Сарафан пляжный', 'Жакет кожаный', 'Майка с вырезом', 'Комбинезон рабочий', 'Пончо с капюшоном', 'Боди с кружевом', 'Туника с рукавами'],
    'Мужская одежда': ['Футболка', 'Джинсы', 'Рубашка', 'Худи', 'Шорты', 'Куртка', 'Брюки', 'Поло', 'Свитер', 'Штаны', 'Костюм', 'Пиджак', 'Брюки классические', 'Футболка с принтом', 'Шорты пляжные', 'Куртка бомбер', 'Брюки джинсовые', 'Поло с карманом', 'Свитер с воротом', 'Штаны cargo', 'Футболка длинная', 'Джинсы узкие', 'Рубашка клетчатая', 'Худи oversized', 'Шорты спортивные', 'Куртка кожаная', 'Брюки широкие', 'Поло Ralph Lauren', 'Свитер кашемир', 'Штаны льняные', 'Футболка с V-вырезом', 'Джинсы рваные', 'Рубашка linen', 'Худи с капюшоном', 'Шорты chino', 'Куртка trench', 'Брюки slim fit', 'Поло pique', 'Свитер crew neck', 'Штаны relaxed'],
    'Женская обувь': ['Кроссовки', 'Ботинки', 'Туфли', 'Сандалии', 'Балетки', 'Сапоги', 'Кеды', 'Лоферы', 'Мюли', 'Эспадрильи'],
    'Мужская обувь': ['Кроссовки', 'Ботинки', 'Туфли', 'Сандалии', 'Балетки', 'Сапоги', 'Кеды', 'Лоферы', 'Мюли', 'Эспадрильи'],
    'Женские аксессуары': ['Сумка', 'Шарф', 'Колье', 'Серьги', 'Ремень', 'Шляпа', 'Очки', 'Кошелек', 'Браслет', 'Перчатки', 'Клатч', 'Платок', 'Брошь', 'Клипсы', 'Пояс', 'Кепка', 'Очки для чтения', 'Кошелек с цепочкой', 'Кольцо', 'Варежки', 'Сумка рюкзак', 'Шарф кашемир', 'Кулон', 'Серьги с камнями', 'Ремень с пряжкой'],
    'Мужские аксессуары': ['Ремень', 'Часы', 'Кошелек', 'Очки', 'Шарф', 'Перчатки', 'Браслет', 'Ключница', 'Шляпа', 'Запонки', 'Портмоне', 'Часы наручные', 'Кошелек с RFID', 'Очки для чтения', 'Шарф шерстяной', 'Перчатки кожаные', 'Браслет кожаный', 'Ключница с цепью', 'Шляпа fedora', 'Запонки золотые', 'Ремень с пряжкой', 'Часы кварцевые', 'Кошелек с отделениями', 'Очки polarized', 'Шарф шелковый']
}

products = []
id_counter = 1

for cat in categories:
    for title in titles[cat]:
        brand = random.choice(brands)
        price = random.randint(1000, 100000)
        discount = random.randint(0, 50)
        products.append({
            'id': id_counter,
            'title': title,
            'description': f'{title}. Размеры: S-XXL. Цвета: Разноцветные.',
            'price': price,
            'category': cat,
            'brand': brand,
            'discount': discount
        })
        id_counter += 1

# Ensure at least 300
while len(products) < 300:
    cat = random.choice(categories)
    title = random.choice(titles[cat])
    brand = random.choice(brands)
    price = random.randint(1000, 100000)
    discount = random.randint(0, 50)
    products.append({
        'id': id_counter,
        'title': title,
        'description': f'{title}. Размеры: S-XXL. Цвета: Разноцветные.',
        'price': price,
        'category': cat,
        'brand': brand,
        'discount': discount
    })
    id_counter += 1

# Write to file
with open('script_new.js', 'w', encoding='utf-8') as f:
    f.write('const products = [\n')
    for p in products:
        f.write(f'  {{ id: {p["id"]}, title: "{p["title"]}", description: "{p["description"]}", price: {p["price"]}, category: "{p["category"]}", brand: "{p["brand"]}", discount: {p["discount"]} }},\n')
    f.write('];\n\n')

    f.write('let currentCategory = "all";\n\n')
    f.write('const cart = new Map();\n')
    f.write('const productGrid = document.getElementById("productGrid");\n')
    f.write('const cartCount = document.getElementById("cartCount");\n')
    f.write('const cartTotal = document.getElementById("cartTotal");\n')
    f.write('const cartItems = document.getElementById("cartItems");\n')
    f.write('const cartPanel = document.getElementById("cartPanel");\n')
    f.write('const overlay = document.getElementById("overlay");\n')
    f.write('const cartToggle = document.getElementById("cartToggle");\n')
    f.write('const closeCart = document.getElementById("closeCart");\n')
    f.write('const checkoutBtn = document.getElementById("checkoutBtn");\n\n')
    f.write('function formatPrice(value) {\n  return value.toLocaleString("ru-RU");\n}\n\n')
    f.write('function getProductImages(product) {\n  const brand = product.brand.toLowerCase();\n  const title = product.title.toLowerCase().replace(/[^a-z0-9 ]/g, "");\n  const keyword = `${brand} ${title}`;\n  return Array.from({ length: 4 }, (_, i) => `https://source.unsplash.com/400x400/?${encodeURIComponent(keyword)}&sig=${product.id * 4 + i}`);\n}\n\n')
    f.write('function renderProducts() {\n  const filteredProducts = currentCategory === "all" ? products : products.filter(product => product.category === currentCategory);\n  productGrid.innerHTML = filteredProducts.map(product => {\n    const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price;\n    const priceHtml = product.discount ? \n      `<div class="price"><span class="old-price">${formatPrice(product.price)} ₸</span> <span class="new-price">${formatPrice(discountedPrice)} ₸</span> <span class="discount-badge">-${product.discount}%</span></div>` :\n      `<div class="price">${formatPrice(product.price)} ₸</div>`;\n    const images = getProductImages(product);\n    return `\n    <article class="card">\n      <div class="image-wrapper">\n        <img class="main-image" src="${images[0]}" alt="${product.title}" loading="lazy" onerror="this.src=\'https://via.placeholder.com/400x400?text=No+Image\'" />\n        <div class="image-grid">\n          ${images.slice(1, 4).map((src, idx) => `\n            <img src="${src}" alt="${product.title} фото ${idx + 2}" loading="lazy" onerror="this.src=\'https://via.placeholder.com/400x400?text=No+Image\'" />\n          `).join("")}\n        </div>\n      </div>\n      <div class="card-body">\n        <h3 class="card-title">${product.brand} ${product.title}</h3>\n        ${priceHtml}\n        <p class="description">${product.description}</p>\n        <button class="add-to-cart" data-id="${product.id}">Добавить в корзину</button>\n      </div>\n    </article>`;\n  }).join("");\n}\n\n')
    f.write('// Cart functions\n')
    f.write('cartToggle.addEventListener("click", () => {\n  cartPanel.classList.add("open");\n  overlay.classList.add("active");\n});\n\n')
    f.write('closeCart.addEventListener("click", () => {\n  cartPanel.classList.remove("open");\n  overlay.classList.remove("active");\n});\n\n')
    f.write('overlay.addEventListener("click", () => {\n  cartPanel.classList.remove("open");\n  overlay.classList.remove("active");\n});\n\n')
    f.write('function updateCart() {\n  cartCount.textContent = cart.size;\n  cartTotal.textContent = formatPrice(Array.from(cart.values()).reduce((sum, item) => sum + item.price * item.quantity, 0));\n  cartItems.innerHTML = Array.from(cart.entries()).map(([id, item]) => `\n    <div class="cart-item">\n      <img src="${getProductImages(products.find(p => p.id == id))[0]}" alt="${item.title}" />\n      <div>\n        <h4>${item.title}</h4>\n        <p>${formatPrice(item.price)} ₸ x ${item.quantity}</p>\n      </div>\n      <button class="remove-item" data-id="${id}">Удалить</button>\n    </div>\n  `).join("");\n}\n\n')
    f.write('productGrid.addEventListener("click", (e) => {\n  if (e.target.classList.contains("add-to-cart")) {\n    const id = e.target.dataset.id;\n    const product = products.find(p => p.id == id);\n    if (cart.has(id)) {\n      cart.get(id).quantity++;\n    } else {\n      cart.set(id, { ...product, quantity: 1 });\n    }\n    updateCart();\n  }\n});\n\n')
    f.write('cartItems.addEventListener("click", (e) => {\n  if (e.target.classList.contains("remove-item")) {\n    const id = e.target.dataset.id;\n    cart.delete(id);\n    updateCart();\n  }\n});\n\n')
    f.write('checkoutBtn.addEventListener("click", () => {\n  alert("Заказ оформлен!");\n  cart.clear();\n  updateCart();\n});\n\n')
    f.write('function filterProducts(category) {\n  currentCategory = category;\n  renderProducts();\n}\n\n')
    f.write('// Initial render\n')
    f.write('renderProducts();\n')
    f.write('updateCart();\n')

print(f'Generated {len(products)} products')