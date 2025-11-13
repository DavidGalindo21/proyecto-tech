const productos = [
  {
    id: 1,
    categoria: 'celulares',
    nombre: 'iPhone 15 Pro',
    descripcion: 'El smartphone más avanzado de Apple con chip A17 Pro',
    precio: '$19,900',
    imagen: 'https://media.gq.com.mx/photos/634d8cca740e69985e3e0cb5/master/w_1600%2Cc_limit/IPHONE%252014.jpg',
    specs: ['6.1" Super Retina XDR', '256GB', 'Cámara 48MP', '5G']
  },
  {
    id: 2,
    categoria: 'celulares',
    nombre: 'Samsung Galaxy S24',
    descripcion: 'Potencia y elegancia en un solo dispositivo',
    precio: '$9,200',
    imagen: 'https://images.samsung.com/is/image/samsung/assets/mx/smartphones/galaxy-s24/buy/S24-Color-Cobalt_Violet_PC_0527_final.jpg',
    specs: ['6.2" Dynamic AMOLED', '128GB', 'Cámara 50MP', '5G']
  },
  {
    id: 3,
    categoria: 'laptops',
    nombre: 'MacBook Pro 16"',
    descripcion: 'Potencia profesional para creativos y desarrolladores',
    precio: '$57,600',
    imagen: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111932_sp809-mbp16touch-silver-2019.jpeg',
    specs: ['M3 Pro', '16GB RAM', '512GB SSD', 'Liquid Retina XDR']
  },
  {
    id: 4,
    categoria: 'laptops',
    nombre: 'Dell XPS 15',
    descripcion: 'Laptop premium con rendimiento excepcional',
    precio: '$27,000',
    imagen: 'https://m.media-amazon.com/images/I/717Lo8oZaAL.jpg',
    specs: ['Intel i7 13th Gen', '16GB RAM', '1TB SSD', '15.6" OLED']
  },
  {
    id: 5,
    categoria: 'consolas',
    nombre: 'PlayStation 5',
    descripcion: 'La experiencia de juego definitiva',
    precio: '$14,780',
    imagen: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
    specs: ['4K Gaming', '825GB SSD', 'Ray Tracing', 'DualSense Controller']
  },
  {
    id: 6,
    categoria: 'consolas',
    nombre: 'Xbox Series X',
    descripcion: 'La consola más potente de Xbox',
    precio: '$11,800',
    imagen: 'https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/981028738l.jpg',
    specs: ['4K Gaming', '1TB SSD', '120fps', 'Quick Resume']
  },
  {
    id: 7,
    categoria: 'pc',
    nombre: 'Alienware Aurora R15',
    descripcion: 'PC Gaming de alto rendimiento',
    precio: '$65,850',
    imagen: 'https://m.media-amazon.com/images/I/610nId7ApAL._AC_UF894,1000_QL80_.jpg',
    specs: ['RTX 4080', 'Intel i9 13th Gen', '32GB RAM', '2TB SSD']
  },
  {
    id: 8,
    categoria: 'pc',
    nombre: 'ROG Strix G15',
    descripcion: 'Torre gaming con diseño futurista',
    precio: '$28,600',
    imagen: 'https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SL1500_.jpg',
    specs: ['RTX 4070', 'AMD Ryzen 9', '16GB RAM', '1TB SSD']
  },
  {
    id: 9,
    categoria: 'celulares',
    nombre: 'Google Pixel 8 Pro',
    descripcion: 'IA avanzada y fotografía excepcional',
    precio: '$10,305',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_840255-MLA95708279620_102025-O.webp',
    specs: ['6.7" LTPO OLED', '256GB', 'Cámara 50MP', 'Google Tensor G3']
  },
  {
    id: 10,
    categoria: 'laptops',
    nombre: 'ASUS ROG Zephyrus',
    descripcion: 'Laptop gaming ultradelgada',
    precio: '$33,900',
    imagen: 'https://dlcdnwebimgs.asus.com/gain/5C8D822E-6BE1-448F-9819-2CF68A90B368/w717/h525',
    specs: ['RTX 4060', 'AMD Ryzen 9', '16GB RAM', '1TB SSD']
  },
  {
    id: 11,
    categoria: 'consolas',
    nombre: 'Nintendo Switch OLED',
    descripcion: 'Juega en casa o donde quieras',
    precio: '$6,000',
    imagen: 'https://resources.claroshop.com/medios-plazavip/t1/1728404886Proyectonuevo7png',
    specs: ['7" OLED', '64GB', 'Joy-Con', 'Dock incluido']
  },
  {
    id: 12,
    categoria: 'pc',
    nombre: 'HP Omen 45L',
    descripcion: 'Potencia sin límites para gamers',
    precio: '$65,550',
    imagen: 'https://kaas.hpcloud.hp.com/PROD/v2/renderbinary/5911297/5038347/con-win-dt-p-omen-45l-gt22-0007ns-product-specifications/articuno-desktop',
    specs: ['RTX 4090', 'Intel i9', '64GB RAM', '2TB SSD']
  }
];

const galeriaImagenes = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
    alt: 'Tienda de tecnología'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    alt: 'Productos electrónicos'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
    alt: 'Laptops en exhibición'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
    alt: 'Gaming setup'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    alt: 'Smartphones'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    alt: 'Servicio al cliente'
  }
];

function renderProductos(categoria = 'all') {
  const productosGrid = document.getElementById('productos-grid');
  const productosFiltrados = categoria === 'all'
    ? productos
    : productos.filter(p => p.categoria === categoria);

  productosGrid.innerHTML = productosFiltrados.map(producto => `
    <div class="col-md-6 col-lg-4">
      <div class="product-card">
        <div class="product-image-container">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
          <span class="product-badge">Nuevo</span>
        </div>
        <div class="product-body">
          <h3 class="product-title">${producto.nombre}</h3>
          <p class="product-description">${producto.descripcion}</p>
          <ul class="product-specs">
            ${producto.specs.map(spec => `<li><i class="bi bi-check-circle-fill"></i>${spec}</li>`).join('')}
          </ul>
          <div class="product-price">${producto.precio} MXN</div>
          <!-- botón corregido: quitar onclick y usar event delegation -->
          <button class="btn btn-primary add-to-cart" data-id="${producto.id}">
            <i class="bi bi-cart-plus"></i> Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderGaleria() {
  const galeriaGrid = document.getElementById('galeria-grid');
  galeriaGrid.innerHTML = galeriaImagenes.map(imagen => `
    <div class="col-md-6 col-lg-4">
      <div class="gallery-item">
        <img src="${imagen.url}" alt="${imagen.alt}" class="gallery-image">
        <div class="gallery-overlay">
          <i class="bi bi-zoom-in"></i>
        </div>
      </div>
    </div>
  `).join('');
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const categoria = button.getAttribute('data-category');
      renderProductos(categoria);
    });
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = '#212529';
    } else {
      navbar.style.background = '#212529';
    }
  });
}

/* --- Carrito (persistencia en localStorage) --- */
const CART_KEY = 'smartmarket_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Guard para evitar errores si setupContactForm no está definida
if (typeof setupContactForm !== 'function') {
  window.setupContactForm = () => {};
}

function formatCurrency(v) {
  // Mostrar en pesos mexicanos
  return Number(v).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
}

/* convierte cadenas como "$19,900" -> 19900
   estrategia simple: eliminar símbolos y separadores de miles (comas) */
function parsePrice(precioStr) {
  if (typeof precioStr === 'number') return precioStr;
  let s = String(precioStr || '');
  // quitar todo menos dígitos y separadores . y ,
  s = s.replace(/[^0-9.,-]/g, '');
  // si hay comas usadas como separador de miles, las eliminamos
  // (en tu dataset las comas son miles, no decimales)
  s = s.replace(/,/g, '');
  // ahora parseFloat
  return parseFloat(s) || 0;
}

function updateQuantity(id, qty) {
  const cart = getCart()
    .map(item => (Number(item.id) === Number(id) ? { ...item, qty: Math.max(0, qty) } : item))
    .filter(i => i.qty > 0);
  saveCart(cart);
  renderCart();
}

function removeFromCart(id) {
  const cart = getCart().filter(item => Number(item.id) !== Number(id));
  saveCart(cart);
  renderCart();
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  renderCart();
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const badge = document.getElementById('cart-count');
  if (!container || !totalEl || !badge) return;

  container.innerHTML = '';
  let total = 0;
  let count = 0;

  if (cart.length === 0) {
    container.innerHTML = '<div class="text-center text-muted">Tu carrito está vacío</div>';
  } else {
    cart.forEach(item => {
      total += item.price * item.qty;
      count += item.qty;

      const itemEl = document.createElement('div');
      itemEl.className = 'list-group-item d-flex align-items-center';
      itemEl.innerHTML = `
        <div class="flex-grow-1">
          <div class="fw-semibold">${item.title}</div>
          <small class="text-muted">${formatCurrency(item.price)} x ${item.qty} = ${formatCurrency(item.price * item.qty)} MXN</small>
        </div>
        <div class="ms-3 d-flex align-items-center gap-2">
          <input type="number" min="1" value="${item.qty}" data-id="${item.id}" class="form-control form-control-sm cart-qty" style="width:70px">
          <button class="btn btn-sm btn-outline-danger remove-item" data-id="${item.id}" title="Eliminar"><i class="bi bi-trash"></i></button>
        </div>
      `;
      container.appendChild(itemEl);
    });
  }

  totalEl.textContent = formatCurrency(total);
  badge.textContent = count;
}

function findProduct(id) {
  return productos.find(p => Number(p.id) === Number(id)) || null;
}

function addToCart(id, qty = 1) {
  const prod = findProduct(id);
  if (!prod) return;
  const cart = getCart();
  const existing = cart.find(item => Number(item.id) === Number(prod.id));
  const priceNum = parsePrice(prod.precio);
  if (existing) {
    existing.qty = Math.max(1, existing.qty + qty);
  } else {
    cart.push({ id: prod.id, title: prod.nombre, price: priceNum, qty: Math.max(1, qty) });
  }
  saveCart(cart);
  renderCart();

  // mostrar SweetAlert2 al agregar
  if (typeof alerta === 'function') {
    alerta(prod.nombre);
  }
}

/* Delegación para botones "Agregar al carrito", eliminación y cambio de cantidad */
document.addEventListener('click', (e) => {
  // Botón Agregar al carrito
  if (e.target.closest('.add-to-cart')) {
    const addBtn = e.target.closest('.add-to-cart');
    const id = addBtn.dataset.id;
    addToCart(id, 1);
    return;
  }

  // Botón Eliminar del carrito
  if (e.target.closest('.remove-item')) {
    const removeBtn = e.target.closest('.remove-item');
    const id = removeBtn.dataset.id;
    removeFromCart(id);
    return;
  }
});

document.addEventListener('change', (e) => {
  if (e.target.matches('.cart-qty')) {
    const id = e.target.dataset.id;
    const qty = parseInt(e.target.value, 10) || 1;
    updateQuantity(id, qty);
  }
});

/* Inicialización: renderiza carrito y conecta botones offcanvas */
document.addEventListener('DOMContentLoaded', () => {
  renderProductos();
  renderGaleria();
  setupFilters();
  setupContactForm();
  setupSmoothScroll();
  setupNavbarScroll();
  renderCart();

  const clearBtn = document.getElementById('clear-cart-btn');
  if (clearBtn) clearBtn.addEventListener('click', vaciar);

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) {
      Swal.fire({
        title: "Carrito vacío",
        text: "Agrega productos antes de realizar la compra",
        icon: "warning"
      });
      return;
    }
    confirmarVenta();
  });
});

function alerta(nombre) {
  Swal.fire({
  title: "Agregado al carrito",
  text: "Has agregado el producto " + nombre + " al carrito de compras.",
  icon: "success"
});
}

function vaciar(){
  Swal.fire({
  title: "¿Seguro que quieres vaciar el carrito?",
  showCancelButton: true,
  confirmButtonText: "Sí, vaciar",
  cancelButtonText: "Cancelar",
  icon: "question"
}).then((result) => {
  if (result.isConfirmed) {
    clearCart();
    Swal.fire({
      title: "Carrito vaciado",
      text: "El carrito de compras ha sido vaciado.",
      icon: "success"
    });
  }
})
}

function lanzarConfetti() {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 }
    });
  }

function confirmarVenta(){
  Swal.fire({
  title: "¿Confirmar compra?",
  showCancelButton: true,
  confirmButtonText: "Sí, comprar",
  cancelButtonText: "Cancelar",
  icon: "question"
}).then((result) => {
  if (result.isConfirmed) {
    clearCart();
    Swal.fire({
      title: "Compra realizada",
      text: "Gracias por tu compra.",
      icon: "success"
    }).then(e=>{
      if(e.isConfirmed){
          lanzarConfetti();
      }
    })
  }
})
}

// Delegación para abrir imagen en modal al hacer click en la galería
document.addEventListener('click', (e) => {
  // busca el contenedor de la imagen de galería (permite click en la imagen o en el overlay/ico)
  const galleryItem = e.target.closest('.gallery-item') || (e.target.classList && e.target.classList.contains('gallery-image') && e.target);
  if (!galleryItem) return;

  // si es un element que contiene la imagen, extraer la <img>
  const img = galleryItem.querySelector ? galleryItem.querySelector('img') : (e.target.matches && e.target.matches('img') ? e.target : null);
  if (!img) return;

  const modalImg = document.getElementById('galleryModalImg');

  if (!modalImg) return;

  // setear src y alt
  modalImg.src = img.src;
 

  

  // mostrar modal usando API de bootstrap (ya cargado en index.html)
  const modalEl = document.getElementById('galleryModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
});

