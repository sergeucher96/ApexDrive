// script.js (ФИНАЛЬНАЯ ВЕРСИЯ С ТВОИМИ ТОВАРАМИ И GRID-ВЕРСТКОЙ)

document.addEventListener('DOMContentLoaded', () => {
    // Проверка на запуск внутри Telegram
    if (typeof window.Telegram === 'undefined' || !window.Telegram.WebApp) {
        console.error("Это приложение предназначено для запуска внутри Telegram.");
        document.body.innerHTML = `<div style="text-align:center; padding: 40px; font-family: sans-serif;"><h1>Ошибка</h1><p>Пожалуйста, откройте это приложение внутри Telegram.</p></div>`;
        return;
    }
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#121212');
    tg.setBackgroundColor('#121212');

    const productsContainer = document.getElementById('products-container');
    const shareBtn = document.getElementById('share-btn');

    // --- ОБНОВЛЕННАЯ БАЗА ТОВАРОВ С ВАШИМИ ССЫЛКАМИ ---
 const products = [
        // --- ТОП-ТОВАРЫ ---
          {
            name: "Автобаферы Power Guard",
            description: "<br>Защита подвески, увеличение клиренса. <br>Установка производится самостоятельно, без вмешательства в конструкцию авто и без изменения геометрии подвески",
            price: "790₽",
            oldPrice: "1580₽",
            imageUrl: "1baffer.gif",
            link: "https://myblogshop.top/r/glGUvQek/s"
        },
        {
            name: "Зеркало бортовой комьютер",
            description: "Видеорегистратор, GPS-информер, Радар-детектор",
            price: "2190₽",
            oldPrice: "4380₽",
            imageUrl: "2mirror.jpg",
            link: "https://myblogshop.top/r/kNgTVz9Z/s"
        },
                {
            name: "Органайзеры-саквояжи Trokot",
            description: "Cтильный и практичный аксессуар для удобного и безопасного хранения вещей в автомобиле",
            price: "3490₽",
            oldPrice: "4990₽",
            imageUrl: "3sumki.gif",
            link: "https://myblogshop.top/r/WxlcM054/s"
        },
        {
            name: "Пусковое устройство",
            description: "Jump Starter + Power Bank для авто",
            price: "2990₽",
            oldPrice: "5980₽",
            imageUrl: "4puskozaryad.jpg",
            link: "https://myblogshop.top/r/oKdUJ58g/s"
        },
        {
            name: "Аккумуляторная автомойка",
            description: "<br> 30 АТМ пиковое давление, До 40 минут работы с учетом 1 АКБ, Шланг длиной 5 м",
            price: "3490₽",
            oldPrice: "6980₽",
            imageUrl: "5moika.png",
            link: "https://myblogshop.top/r/e6YF6Rer/s"
        },
        {
            name: "Магнитола Pioneer DEH",
            description: "<br>Поддержка управления на руле, USB, AUX, RCA",
            price: "2990₽",
            oldPrice: "5980₽",
            imageUrl: "6pioneer-320.png",
            link: "https://myblogshop.top/r/VrxFDVdx/s"
        },
        {
            name: "Магнитола Pioneer MVH",
            description: "<br>Bluetooth, USB, Совместим с iphone/Andriod/ipod",
            price: "2990₽",
            oldPrice: "5980₽",
            imageUrl: "7pion.png",
            link: "https://myblogshop.top/r/N2QUNwaR/s"
        },
        

        {
            name: "Жидкое стекло WSH",
            description: "Защитное покрытие для кузова",
            price: "1390₽",
            oldPrice: "2780₽",
            imageUrl: "8glass.png",
            link: "https://myblogshop.top/r/vZ6FMr5a/s"
        },
        {
            name: "Накидки на сиденья (Мех)",
            description: "Искусственный мех, премиум-вид",
            price: "2990₽",
            oldPrice: "3980₽",
            imageUrl: "9meh.png",
            link: "https://myblogshop.top/r/ddpUa5pN/s"
        },

        {
            name: "Накидки из алькантары Trokot",
            description: "Алькантара, защита сидений<br>Комфортны при любой погоде",
            price: "2490₽",
            oldPrice: "5310₽",
            imageUrl: "10nakid.jpg",
            link: "https://myblogshop.top/r/Dxyc0xow/s"
        },
        {
            name: "Автошторки Trokot",
            description: "Тонировка нового поколения<br>Каркасные, на магнитах, отличный обзор по зеркалам",
            price: "3590₽",
            oldPrice: "4490₽",
            imageUrl: "11toner.png",
            link: "https://myblogshop.top/r/yx6ck9NO/s"
        }
    ];

    function renderProducts() {
        if (!productsContainer) return;
        productsContainer.innerHTML = '';

        const topProducts = products.slice(0, 5);
        const otherProducts = products.slice(5);

        if (topProducts.length > 0) {
            productsContainer.innerHTML += `<div class="section-subtitle">🔥 Топ Продаж</div>`;
            topProducts.forEach(product => {
                productsContainer.innerHTML += createProductCardHTML(product, true);
            });
        }

        if (otherProducts.length > 0) {
            productsContainer.innerHTML += `<div class="section-subtitle" style="margin-top: 20px;">💎 Аксессуары и другое</div>`;
            otherProducts.forEach(product => {
                productsContainer.innerHTML += createProductCardHTML(product, false);
            });
        }
        
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                tg.openLink(card.dataset.link);
            });
        });
    }

    /**
     * Вспомогательная функция, которая создает HTML-код одной карточки товара
     */
 function createProductCardHTML(product, isTop) {
        // Создаем HTML для цены с учетом старой цены
        const priceHTML = `
            <div class="price-wrapper">
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ''}
                <span class="product-price">${product.price}</span>
            </div>
        `;

        return `
            <div class="product-card ${isTop ? 'is-top' : ''}" data-link="${product.link}">
                <img src="${product.imageUrl}" alt="${product.name}">
                <div class="product-details">
                    <span class="product-name">${product.name}</span>
                    <span class="product-description">${product.description}</span>
                </div>
                ${priceHTML}
            </div>
        `;
    }


    // --- Обработчик для кнопки "Поделиться" ---
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const botUsername = 'ApexDriverBot'; // Замените на юзернейм вашего бота
            const shareText = `Привет! 👋 Нашел крутой магазин автотоваров прямо в Telegram. Удобный каталог, лучшие цены. Зацени! 👉 @${botUsername}`;
            const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(`https://t.me/${botUsername}`)}&text=${encodeURIComponent(shareText)}`;
            tg.openTelegramLink(shareUrl);
        });
    }

    // --- Первичный запуск ---
    renderProducts();
});