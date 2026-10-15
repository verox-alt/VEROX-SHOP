const ASSET = 'images/';
const WHATSAPP_NUMBER = '212717647198';
const products = [
  { id: 'essential-black', name: 'Essential Tee / Black', color: 'Black', image: 'image 6.png', price: 99, category: 'T-Shirts', description: 'A clean everyday staple in soft, mid-weight cotton.' },
  { id: 'electric-blue', name: 'Core Tee / Electric Blue', color: 'Blue', image: 'image 2.png', price: 99, category: 'T-Shirts', description: 'The signature VEROX blue, made for daily rotation.' },
  { id: 'cloud-white', name: 'Essential Tee / Cloud', color: 'White', image: 'image 1.png', price: 99, category: 'T-Shirts', description: 'Crisp, minimal and ready for every fit.' },
  { id: 'midnight-navy', name: 'Core Tee / Midnight', color: 'Navy', image: 'image 3.png', price: 99, category: 'T-Shirts', description: 'A deep navy essential with an effortless streetwear fit.' },
  { id: 'graphite', name: 'Studio Tee / Graphite', color: 'Grey', image: 'image 8.png', price: 99, category: 'T-Shirts', description: 'Soft graphite jersey with a refined everyday cut.' },
  { id: 'olive', name: 'Utility Tee / Olive', color: 'Green', image: 'image 4.png', price: 99, category: 'T-Shirts', description: 'A versatile olive tone, comfortable and made to move.' },
  { id: 'ash-grey', name: 'Essential Tee / Ash', color: 'Grey', image: 'image 11.png', price: 99, category: 'T-Shirts', description: 'The everyday grey tee with a modern fit.' },
  { id: 'sun-yellow', name: 'Signal Tee / Yellow', color: 'Yellow', image: 'image 9.png', price: 99, category: 'T-Shirts', description: 'A high-energy pop of colour for your rotation.' },
  { id: 'sand', name: 'Studio Tee / Sand', color: 'Beige', image: 'image 10.png', price: 99, category: 'T-Shirts', description: 'A warm neutral with a premium feel.' },
  { id: 'black-hoodie', name: 'Black Hoodie', color: 'Black', image: 'image 13.png', price: 199, category: 'Hoodies', description: 'A clean black hoodie with a soft feel and everyday fit.' },
  { id: 'white-hoodie', name: 'White Hoodie', color: 'White', image: 'image 14.png', price: 199, category: 'Hoodies', description: 'A bright white staple with a relaxed streetwear silhouette.' },
  { id: 'yellow-hoodie', name: 'Yellow Hoodie', color: 'Yellow', image: 'image 15.png', price: 199, category: 'Hoodies', description: 'A bold yellow hoodie to bring energy to your everyday look.' },
  { id: 'burgundy-hoodie', name: 'Burgundy Hoodie', color: 'Burgundy', image: 'image 16.png', price: 199, category: 'Hoodies', description: 'A rich burgundy staple with a standout streetwear look.' },
  { id: 'green-hoodie', name: 'Green Hoodie', color: 'Green', image: 'image 17.png', price: 199, category: 'Hoodies', description: 'A refined green hoodie made for clean, comfortable layering.' }
];
const sizes = ['S', 'M', 'L', 'XL'];
const root = document.getElementById('root');
const money = (amount) => `${amount} DH`;

function orderUrl(item, size = 'M') {
  const message = `Hello VEROX SHOP, I would like to order ${item.name} in ${item.color}, size ${size}, for ${money(item.price)}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function card(item) {
  return `<article class="product-card" data-category="${item.category}">
    <a class="product-image" href="${orderUrl(item)}" target="_blank" rel="noopener noreferrer" aria-label="Order ${item.name}">
      <img src="${ASSET}${item.image}" alt="${item.name}" loading="lazy">
      ${item.category === 'Hoodies' ? '<span class="product-badge">199 DH</span>' : ''}
    </a>
    ${item.gallery ? `<div class="product-thumbnails">${item.gallery.map((image) => `<img src="${ASSET}${image}" alt="${item.name} additional view" loading="lazy">`).join('')}</div>` : ''}
    <div class="product-info"><div><p class="product-category">${item.category} / ${item.color}</p><h3>${item.name}</h3></div><strong>${money(item.price)}</strong></div>
    <p class="product-description">${item.description}</p>
    <div class="product-meta"><span>Sizes</span><div class="size-list">${sizes.map((size) => `<a href="${orderUrl(item, size)}" target="_blank" rel="noopener noreferrer">${size}</a>`).join('')}</div></div>
    <a class="order-button" href="${orderUrl(item)}" target="_blank" rel="noopener noreferrer">Order on WhatsApp <span aria-hidden="true">↗</span></a>
  </article>`;
}

root.innerHTML = `
  <div class="announcement">Free delivery across Morocco on orders over 499 DH</div>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="VEROX SHOP home">VEROX <span>SHOP</span></a>
    <nav aria-label="Main navigation"><a href="#collection">Shop</a><a href="#hoodies">Hoodies · 199 DH</a><a href="#last-photos">New photos</a></nav>
    <a class="header-cta" href="#collection">Shop the collection <span aria-hidden="true">↗</span></a>
  </header>
  <main id="top">
    <section class="hero">
      <img class="hero-image" src="${ASSET}Gemini_Generated_Image_aa0vsiaa0vsiaa0v.jpg" alt="VEROX SHOP clothing collection" fetchpriority="high">
      <div class="hero-shade"></div>
      <div class="hero-content"><p class="eyebrow">Designed in Morocco</p><h1>Define your<br><em>style.</em></h1><p>Everyday streetwear, made for the move.</p><a class="hero-button" href="#collection">Explore the collection <span aria-hidden="true">↓</span></a></div>
    </section>
    <section class="collection section-wrap" id="collection">
      <div class="section-heading"><div><p class="eyebrow">The VEROX collection</p><h2>Find your <em>uniform.</em></h2><p>Everyday pieces with a little more intent.</p></div><span class="result-count" id="result-count">${products.length} pieces</span></div>
      <div class="toolbar"><div class="filters" role="group" aria-label="Filter products">
        <button class="filter-button is-active" data-filter="All">All pieces</button><button class="filter-button" data-filter="T-Shirts">T-Shirts</button><button class="filter-button" data-filter="Hoodies">Hoodies · 199 DH</button>
      </div><label class="search"><span aria-hidden="true">⌕</span><input id="search" type="search" placeholder="Search the collection" aria-label="Search products"></label></div>
      <div class="product-grid" id="product-grid">${products.map(card).join('')}</div>
    </section>
    <section class="hoodie-note" id="hoodies"><p class="eyebrow">The hoodie edit</p><h2>All hoodies.<br><em>199 DH.</em></h2><a href="#collection" data-show-hoodies>Shop hoodie colours <span aria-hidden="true">↗</span></a></section>
    <section class="last-photos section-wrap" id="last-photos">
      <div class="section-heading"><div><p class="eyebrow">Last photos</p><h2>New season <em>outerwear.</em></h2><p>Black hoodie and puffer jacket · 199 DH each</p></div></div>
      <div class="last-products">
        <article class="last-product">
          <div class="last-product-heading"><div><p class="product-category">Hoodies / Black</p><h3>Essential Hoodie / Black</h3></div><strong>199 DH</strong></div>
          <div class="last-product-gallery">
            ${['image 18.jpeg', 'image 19.jpg'].map((image, index) => `<figure><img src="${ASSET}${image}" alt="Black hoodie - photo ${index + 1}" loading="lazy"></figure>`).join('')}
          </div>
          <a class="order-button" href="${orderUrl({ name: 'Essential Hoodie', color: 'Black', price: 199 })}" target="_blank" rel="noopener noreferrer">Order hoodie on WhatsApp <span aria-hidden="true">↗</span></a>
        </article>
        <article class="last-product">
          <div class="last-product-heading"><div><p class="product-category">Outerwear / Black</p><h3>Puffer Jacket / Black</h3></div></div>
          <div class="last-product-gallery last-product-gallery--three">
            ${['image 20.jpg', 'image 21.jpg', 'image 22.jpg'].map((image, index) => `<figure><img src="${ASSET}${image}" alt="Black puffer jacket - photo ${index + 1}" loading="lazy"></figure>`).join('')}
          </div>
          <a class="order-button" href="${orderUrl({ name: 'Puffer Jacket', color: 'Black', price: 199 })}" target="_blank" rel="noopener noreferrer">Order jacket on WhatsApp <span aria-hidden="true">↗</span></a>
        </article>
      </div>
    </section>
    <section class="manifesto">
      <div class="manifesto-inner">
        <div><p class="eyebrow">The VEROX standard</p><h2>Less noise.<br><em>More signal.</em></h2></div>
        <div class="manifesto-copy"><p>We make the pieces you reach for first. Clean cuts, considered colour and quality that feels right from the first wear.</p><a href="#collection">Discover the collection →</a></div>
      </div>
    </section>
    <section class="benefits section-wrap" aria-label="Why shop VEROX">
      <article class="benefit"><span aria-hidden="true">+</span><div><h3>Quality first</h3><p>Reliable fabrics. Considered details. Zero shortcuts.</p></div></article>
      <article class="benefit"><span aria-hidden="true">+</span><div><h3>Fast delivery</h3><p>Quick dispatch, anywhere in Morocco.</p></div></article>
      <article class="benefit"><span aria-hidden="true">+</span><div><h3>Here to help</h3><p>Real support when you need it.</p></div></article>
      <article class="benefit"><span aria-hidden="true">+</span><div><h3>Better prices</h3><p>Premium energy without the premium markup.</p></div></article>
    </section>
  </main>
  <footer class="site-footer"><a class="brand" href="#top">VEROX <span>SHOP</span></a><span>Everyday streetwear · Casablanca, Morocco</span><div class="social-links">
    <a href="https://www.instagram.com/verox_.shop/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle class="social-dot" cx="18" cy="6" r="1"></circle></svg><span>Instagram</span>
    </a>
    <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"></path><path d="M9 8.5c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .7.6 1 1.4 1.7 2.4 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .5-.2 1-.6 1.3-.4.4-1 .6-1.6.5-1-.1-2.2-.6-3.6-1.6-1.5-1.1-2.5-2.5-2.8-3.6-.3-1 .1-1.9.5-2.4Z"></path></svg><span>WhatsApp</span>
    </a>
  </div></footer>
`;

let activeFilter = 'All';
const searchInput = document.getElementById('search');
const grid = document.getElementById('product-grid');

function refreshProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const visible = products.filter((item) =>
    (activeFilter === 'All' || item.category === activeFilter) &&
    `${item.name} ${item.color} ${item.category}`.toLowerCase().includes(query)
  );
  grid.innerHTML = visible.map(card).join('');
  document.getElementById('result-count').textContent = `${visible.length} pieces`;
}

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach((filter) => filter.classList.toggle('is-active', filter === button));
    refreshProducts();
  });
});
searchInput.addEventListener('input', refreshProducts);
document.querySelector('[data-show-hoodies]').addEventListener('click', () => {
  activeFilter = 'Hoodies';
  document.querySelectorAll('[data-filter]').forEach((filter) => filter.classList.toggle('is-active', filter.dataset.filter === activeFilter));
  refreshProducts();
});
