/* DATOS DEL MENÚ
   Cambia estos productos y precios por los de tu carta.
   Futuro: cargar los productos desde una API o JSON. */
const productos = [
  { id: 1, nombre: 'Hamburguesa con Queso', precio: 12 },
  { id: 2, nombre: 'Hamburguesa Doble Carne & Cheese', precio: 18 },
  { id: 3, nombre: 'Papas fritas', precio: 6 }
];

/* ESTADO DEL CARRITO
   Futuro: guardar el carrito en localStorage. */
const carrito = new Map();
const lista = document.getElementById('lista-carrito');
const total = document.getElementById('total');
const vaciar = document.getElementById('vaciar');
const soles = (importe) => `S/ ${importe.toFixed(2)}`;

function crearBoton(texto, accion, etiqueta = texto) {
  // Crea botones accesibles y reutilizables.
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.textContent = texto;
  boton.setAttribute('aria-label', etiqueta);
  boton.addEventListener('click', accion);
  return boton;
}

function cambiarCantidad(id, cambio) {
  // Actualiza la cantidad y vuelve a mostrar el carrito.
  const cantidad = (carrito.get(id) || 0) + cambio;
  if (cantidad <= 0) carrito.delete(id);
  else carrito.set(id, cantidad);
  mostrarCarrito();
}

function mostrarCarrito() {
  // Redibuja productos, total y estados de la página.
  lista.replaceChildren();
  let importe = 0;

  for (const [id, cantidad] of carrito) {
    const producto = productos.find((producto) => producto.id === id);
    const subtotal = producto.precio * cantidad;
    importe += subtotal;

    const fila = document.createElement('li');
    fila.className = 'fila';
    const detalle = document.createElement('span');
    detalle.textContent = `${producto.nombre} — ${soles(subtotal)}`;
    const controles = document.createElement('div');
    controles.className = 'controles';
    const contador = document.createElement('span');
    contador.textContent = cantidad;
    controles.append(
      crearBoton('−', () => cambiarCantidad(id, -1), `Quitar una unidad de ${producto.nombre}`),
      contador,
      crearBoton('+', () => cambiarCantidad(id, 1), `Agregar una unidad de ${producto.nombre}`),
      crearBoton('Eliminar', () => { carrito.delete(id); mostrarCarrito(); }, `Eliminar ${producto.nombre}`)
    );
    fila.append(detalle, controles);
    lista.append(fila);
  }

  document.getElementById('carrito-vacio').hidden = carrito.size > 0;
  document.getElementById('carrito-con-productos').hidden = carrito.size === 0;
  total.textContent = `Total: ${soles(importe)}`;
  vaciar.disabled = carrito.size === 0;
}

/* TARJETAS DE PRODUCTOS
   Futuro: añadir imágenes, extras y disponibilidad. */
for (const producto of productos) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'producto';
  const nombre = document.createElement('h3');
  nombre.textContent = producto.nombre;
  const precio = document.createElement('p');
  precio.textContent = soles(producto.precio);
  tarjeta.append(nombre, precio, crearBoton('Agregar al carrito', () => cambiarCantidad(producto.id, 1), `Agregar ${producto.nombre} al carrito`));
  document.getElementById('productos').append(tarjeta);
}

// Vacía todos los productos del carrito.
vaciar.addEventListener('click', () => { carrito.clear(); mostrarCarrito(); });
// Futuro: este botón puede abrir un modal o enfocar el catálogo.
document.querySelectorAll('[data-abrir-productos]').forEach((boton) => {
  boton.addEventListener('click', () => {
    const seleccion = document.getElementById('seleccion-productos');
    seleccion.hidden = false;
    seleccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    seleccion.querySelector('button').focus({ preventScroll: true });
  });
});
mostrarCarrito();
