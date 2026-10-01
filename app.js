// --- MODAL TÉRMINOS Y CONDICIONES ---
function abrirModalTerminos(event) {
  event.preventDefault();
  const modal = document.getElementById('modal-terminos');
  if (modal) modal.style.display = 'flex';
}

function cerrarModalTerminos() {
  const modal = document.getElementById('modal-terminos');
  if (modal) modal.style.display = 'none';
}

// --- MODAL POLÍTICAS DE PRIVACIDAD ---
function abrirModalPrivacidad(event) {
  event.preventDefault();
  const modal = document.getElementById('modal-privacidad');
  if (modal) modal.style.display = 'flex';
}

function cerrarModalPrivacidad() {
  const modal = document.getElementById('modal-privacidad');
  if (modal) modal.style.display = 'none';
}

// --- CIERRE AL HACER CLIC FUERA DE CUALQUIER MODAL ---
window.onclick = function(event) {
  const modalTerminos = document.getElementById('modal-terminos');
  const modalPrivacidad = document.getElementById('modal-privacidad');

  if (event.target === modalTerminos) {
    modalTerminos.style.display = 'none';
  }
  if (event.target === modalPrivacidad) {
    modalPrivacidad.style.display = 'none';
  }
};

/* Productos del menú: precio inicial editable y acceso al carrito. */
document.querySelectorAll('.card').forEach((tarjeta) => {
  const nombre = tarjeta.querySelector('.name');
  const contenido = tarjeta.querySelector('.card-content');
  if (!nombre || !contenido || contenido.querySelector('.menu-price')) return;
  const precio = document.createElement('p');
  precio.className = 'menu-price';
  precio.textContent = 'S/ 0.00';
  const boton = document.createElement('a');
  boton.className = 'menu-cart-button';
  boton.href = 'Carrito.html';
  boton.textContent = '+';
  boton.setAttribute('aria-label', `Agregar ${nombre.textContent.trim()} al carrito`);
  const filaPrecio = document.createElement('div');
  filaPrecio.className = 'menu-price-row';
  filaPrecio.append(precio, boton);
  contenido.append(filaPrecio);
});

/* Navegación de las filas de productos sin mostrar la barra de desplazamiento. */
document.querySelectorAll('.slide-wrapper').forEach((fila) => {
  const contenedor = fila.closest('.slide-container');
  if (!contenedor || contenedor.querySelector('.productos-prev')) return;

  const anterior = document.createElement('button');
  anterior.className = 'productos-prev';
  anterior.type = 'button';
  anterior.textContent = '‹';
  anterior.setAttribute('aria-label', 'Ver productos anteriores');

  const siguiente = document.createElement('button');
  siguiente.className = 'productos-next';
  siguiente.type = 'button';
  siguiente.textContent = '›';
  siguiente.setAttribute('aria-label', 'Ver más productos');

  anterior.addEventListener('click', () => fila.scrollBy({ left: -520, behavior: 'smooth' }));
  siguiente.addEventListener('click', () => fila.scrollBy({ left: 520, behavior: 'smooth' }));
  contenedor.append(anterior, siguiente);
});
