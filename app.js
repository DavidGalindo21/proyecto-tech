
const productos = [
  {
    id: 1,
    categoria: 'celulares',
    nombre: 'iPhone 15 Pro',
    descripcion: 'El smartphone más avanzado de Apple con chip A17 Pro',
    precio: '$999',
    imagen: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    specs: ['6.1" Super Retina XDR', '256GB', 'Cámara 48MP', '5G']
  },
  {
    id: 2,
    categoria: 'celulares',
    nombre: 'Samsung Galaxy S24',
    descripcion: 'Potencia y elegancia en un solo dispositivo',
    precio: '$899',
    imagen: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    specs: ['6.2" Dynamic AMOLED', '128GB', 'Cámara 50MP', '5G']
  },
  {
    id: 3,
    categoria: 'laptops',
    nombre: 'MacBook Pro 16"',
    descripcion: 'Potencia profesional para creativos y desarrolladores',
    precio: '$2,499',
    imagen: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    specs: ['M3 Pro', '16GB RAM', '512GB SSD', 'Liquid Retina XDR']
  },
  {
    id: 4,
    categoria: 'laptops',
    nombre: 'Dell XPS 15',
    descripcion: 'Laptop premium con rendimiento excepcional',
    precio: '$1,799',
    imagen: 'https://images.pexels.com/photos/7974/pexels-photo.jpg',
    specs: ['Intel i7 13th Gen', '16GB RAM', '1TB SSD', '15.6" OLED']
  },
  {
    id: 5,
    categoria: 'consolas',
    nombre: 'PlayStation 5',
    descripcion: 'La experiencia de juego definitiva',
    precio: '$499',
    imagen: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    specs: ['4K Gaming', '825GB SSD', 'Ray Tracing', 'DualSense Controller']
  },
  {
    id: 6,
    categoria: 'consolas',
    nombre: 'Xbox Series X',
    descripcion: 'La consola más potente de Xbox',
    precio: '$499',
    imagen: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
    specs: ['4K Gaming', '1TB SSD', '120fps', 'Quick Resume']
  },
  {
    id: 7,
    categoria: 'pc',
    nombre: 'Alienware Aurora R15',
    descripcion: 'PC Gaming de alto rendimiento',
    precio: '$2,299',
    imagen: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    specs: ['RTX 4080', 'Intel i9 13th Gen', '32GB RAM', '2TB SSD']
  },
  {
    id: 8,
    categoria: 'pc',
    nombre: 'ROG Strix G15',
    descripcion: 'Torre gaming con diseño futurista',
    precio: '$1,899',
    imagen: 'https://images.pexels.com/photos/7517396/pexels-photo-7517396.jpeg',
    specs: ['RTX 4070', 'AMD Ryzen 9', '16GB RAM', '1TB SSD']
  },
  {
    id: 9,
    categoria: 'celulares',
    nombre: 'Google Pixel 8 Pro',
    descripcion: 'IA avanzada y fotografía excepcional',
    precio: '$899',
    imagen: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    specs: ['6.7" LTPO OLED', '256GB', 'Cámara 50MP', 'Google Tensor G3']
  },
  {
    id: 10,
    categoria: 'laptops',
    nombre: 'ASUS ROG Zephyrus',
    descripcion: 'Laptop gaming ultradelgada',
    precio: '$2,199',
    imagen: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
    specs: ['RTX 4060', 'AMD Ryzen 9', '16GB RAM', '1TB SSD']
  },
  {
    id: 11,
    categoria: 'consolas',
    nombre: 'Nintendo Switch OLED',
    descripcion: 'Juega en casa o donde quieras',
    precio: '$349',
    imagen: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    specs: ['7" OLED', '64GB', 'Joy-Con', 'Dock incluido']
  },
  {
    id: 12,
    categoria: 'pc',
    nombre: 'HP Omen 45L',
    descripcion: 'Potencia sin límites para gamers',
    precio: '$2,599',
    imagen: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
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
          <div class="product-price">${producto.precio}</div>
          <button class="btn btn-primary btn-product">
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

function setupContactForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = `
      <div class="alert alert-success">
        <i class="bi bi-check-circle-fill me-2"></i>
        <strong>¡Mensaje enviado con éxito!</strong> Nos pondremos en contacto contigo pronto.
      </div>
    `;

    form.reset();

    setTimeout(() => {
      formMessage.innerHTML = '';
    }, 5000);
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

document.addEventListener('DOMContentLoaded', () => {
  renderProductos();
  renderGaleria();
  setupFilters();
  setupContactForm();
  setupSmoothScroll();
  setupNavbarScroll();
});
