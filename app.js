/* Productos del menú: precio inicial editable y acceso a la página del producto. */
document.querySelectorAll('.card').forEach((tarjeta) => {
  const nombre = tarjeta.querySelector('.name');
  const contenido = tarjeta.querySelector('.card-content');
  if (!nombre || !contenido || contenido.querySelector('.menu-price')) return;

  const descrip = tarjeta.querySelector('.descrip');
  const img = tarjeta.querySelector('.card-img');

  const precio = document.createElement('p');
  precio.className = 'menu-price';
  precio.textContent = '';

  const params = new URLSearchParams({
    nombre: nombre.textContent.trim(),
    desc: descrip ? descrip.textContent.trim() : '',
    img: img ? img.getAttribute('src') : '',
    precio: precio.textContent.trim()
  });

  const boton = document.createElement('a');
  boton.className = 'menu-cart-button';
  boton.href = 'producto.html?' + params.toString();
  boton.textContent = '+';
  boton.setAttribute('aria-label', `Ver ${nombre.textContent.trim()}`);

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
const WHATSAPP = "51957059897";

// Formato: [categoría, nombre, descripción, precio, ruta de imagen]
const P = [
 // ===== HAMBURGUESAS =====
 ["Hamburguesas","Hamburguesa con Queso","Carne, tocino crujiente y queso derretido + papas",16.9,"img/Menu/Hamburguesas/Hamburguesa con Queso.jpg"],
 ["Hamburguesas","Hamburguesa Doble Carne & Cheese","2 carnes y queso derretido + papas",19.9,"img/Menu/Hamburguesas/Hamburguesa Doble Carne & Cheese.jpg"],
 ["Hamburguesas","Hamburguesa Extra Tocino & Cheese","Carne, tocino crujiente y queso derretido + papas",18.9,"img/Menu/Hamburguesas/Hamburguesa Extra Tocino & Cheese.jpg"],
 ["Hamburguesas","Hamburguesa Parrillera","Carne, chorizo, cebolla caramelizada y queso derretido + papas",18.9,"img/Menu/Hamburguesas/Hamburguesa Parrillera.jpg"],
 ["Hamburguesas","Hamburguesa a la Pobre","2 carnes, huevo frito y cebolla caramelizada + papas",19.9,"img/Menu/Hamburguesas/Hamburguesa a la Pobre.jfif"],
 ["Hamburguesas","Hamburguesa Doble Carne","2 carnes + papas",18.9,"img/Menu/Hamburguesas/Hamburguesa Doble Carne.jfif"],
 ["Hamburguesas","Hamburguesa Gringa","2 carnes, chorizo parrillero + papas",19.9,"img/Menu/Hamburguesas/Hamburguesa Gringa.jfif"],
 ["Hamburguesas","Hamburguesa Hawaiana","Carne, piña y queso derretido + papas",17.9,"img/Menu/Hamburguesas/Hamburguesa Hawaiana.jfif"],
 ["Hamburguesas","Hamburguesa Simple","Carne + papas",12.9,"img/Menu/Hamburguesas/Hamburguesa Simple.jfif"],
 ["Hamburguesas","Hamburguesa Triple Cheese","2 carnes y demasiado queso + papas",20.9,"img/Menu/Hamburguesas/Hamburguesa Triple cheese.jfif"],

 // ===== ALITAS =====
 ["Alitas","Alitas Simples","6 alitas crujientes",14.9,"img/Menu/Alitas/Alitas Simples.jfif"],
 ["Alitas","Alitas BBQ Picante","6 alitas bañadas en salsa BBQ picante",16.9,"img/Menu/Alitas/Alitas_BBQ_Picante.jfif"],
 ["Alitas","Alitas BBQ","6 alitas bañadas en salsa BBQ",16.9,"img/Menu/Alitas/Alitas_BBQ.jfif"],
 ["Alitas","Alitas Búfalo","6 alitas bañadas en salsa búfalo",16.9,"img/Menu/Alitas/Alitas Bufalo.jfif"],
 ["Alitas","Alitas al Olivo","6 alitas bañadas en salsa al olivo",16.9,"img/Menu/Alitas/Alitas al Olivo.jfif"],
 ["Alitas","Alitas Acevichadas","6 alitas bañadas en salsa acevichada",16.9,"img/Menu/Alitas/Alitas Acevichadas.jfif"],
 ["Alitas","Alitas Ajo Parmesano","6 alitas bañadas en salsa ajo parmesano",16.9,"img/Menu/Alitas/Alitas Ajo Parmesano.jpg"],

 // ===== SHAWARMAS =====
 ["Shawarmas","Shawarma de Lomo Saltado","Jugosos trozos de lomo saltado al wok con cebolla y tomate",17.9,"img/Menu/Shawarmas/Shawarma Lomo Saltado.jpg"],
 ["Shawarmas","Shawarma a lo pobre","Carne, plátano frito, huevo y papas fritas envueltos en pan pita",17.9,"img/Menu/Shawarmas/Shawarma a lo pobre.jfif"],
 ["Shawarmas","Shawarma de Carne","Clásicas tiras de carne sazonada a la parrilla con cremas",15.9,"img/Menu/Shawarmas/Shawarma Carne.jfif"],
 ["Shawarmas","Shawarma Mediterráneo","Tiras de carne con vegetales frescos y un toque de finas hierbas",16.9,"img/Menu/Shawarmas/Shawarma Mediterraneo.jfif"],
 ["Shawarmas","Shawarma Pollo Crunchy","Trozos de pollo súper crujientes con lechuga, papas y cremas",15.9,"img/Menu/Shawarmas/Shawarma Pollo Crunchy.jfif"],
 ["Shawarmas","Shawarma de Pollo","Láminas de pollo asado sazonadas al estilo tradicional",14.9,"img/Menu/Shawarmas/Shawarma Pollo.jfif"],
 ["Shawarmas","Shawarma Simple","La combinación clásica y ligera de carne y vegetales",12.9,"img/Menu/Shawarmas/Shawarma Simple.jfif"],
 ["Shawarmas","Shawarma Vegetariano","Mix de vegetales frescos, palta y tofu frito",14.9,"img/Menu/Shawarmas/Shawarma Vegetariano.jfif"],

 // ===== COMBOS =====
 ["Combos","Combo a lo pobre","1 Hamburguesa A la Pobre + 1 Papa Regular + 1 Bebida Personal",24.9,"img/Combos/Combo_a_la_pobre.png"],
 ["Combos","Combo Alaraco","1 Hamburguesa Alaraco + 1 Papa Regular + 1 Bebida Personal",24.9,"img/Combos/Combo_Alaraco.png"],
 ["Combos","Combo Broaster a la Pobre","1 Hamburguesa Broaster A la Pobre + 1 Papa Regular + 1 Bebida Personal",24.9,"img/Combos/Combo_Broaster_a_lo_pobre.png"],
 ["Combos","Combo Extra Cheese","1 Hamburguesa Extra Cheese + 1 Papa Regular + 1 Bebida Personal",23.9,"img/Combos/Combo_Extra_Cheese.png"],
 ["Combos","Combo Hawaiano","1 Hamburguesa Hawaiana + 1 Papa Regular + 1 Bebida Personal",22.9,"img/Combos/Combo_Hawaiano.png"],
 ["Combos","Combo Parrillero","1 Hamburguesa Parrillera + 1 Papa Regular + 1 Bebida Personal",23.9,"img/Combos/Combo_Parrillero.png"],
 ["Combos","Combo Tocino","1 Hamburguesa con Tocino + 1 Papa Regular + 1 Bebida Personal",23.9,"img/Combos/Combo_Tocino.png"],

 // ===== PROMOS =====
 ["Promos","Duo Alaraco","2 Hamburguesas Alaraco + 2 Papas Regulares + 2 Salsas de la Casa",39.9,"img/Promociones/Duo_alaraco.png"],
 ["Promos","Duo Broaster","2 Hamburguesas Broaster + 2 Papas Regulares + 2 Salsas de la Casa",39.9,"img/Promociones/Duo_Broaster.png"],
 ["Promos","Trio Doble carne y queso","3 Hamburguesas Doble Carne y Queso + 2 Papas Regulares + 3 Salsas de la Casa",54.9,"img/Promociones/Trio_dobleburger_cheese.png"],
 ["Promos","Trio Hamburguesa a la pobre","3 Hamburguesas A la Pobre + 2 Papas Regulares + 3 Salsas de la Casa",54.9,"img/Promociones/Trio_Hamburguesa_a_la_pobre.png"],
 ["Promos","Trio Hawaiano","3 Hamburguesas Hawaianas + 2 Papas Regulares + 3 Salsas de la Casa",54.9,"img/Promociones/Trio_Hawaiano.png"],

 // ===== BEBIDAS =====
 ["Bebidas","Coca Cola 500 ml","Coca Cola 500 ml",4.5,"img/Menu/Bebidas/Coca Cola.webp"],
 ["Bebidas","Inca Kola 500 ml","Inca Kola 500 ml",4.5,"img/Menu/Bebidas/Inka Cola.webp"],
 ["Bebidas","Sprite 500 ml","Sprite 500 ml",4.5,"img/Menu/Bebidas/Sprite.webp"],
 ["Bebidas","Fanta 500 ml","Fanta 500 ml",4.5,"img/Menu/Bebidas/Fanta.webp"],
 ["Bebidas","Pepsi 500 ml","Pepsi 500 ml",4.5,"img/Menu/Bebidas/Pepsi.jpg"],
 ["Bebidas","Agua San Luis Sin Gas 625 ml","Agua San Luis sin gas 625 ml",3.0,"img/Menu/Bebidas/Agua sin gas - San Luis.webp"],
 ["Bebidas","Agua San Luis Con Gas 625 ml","Agua San Luis con gas 625 ml",3.0,"img/Menu/Bebidas/Agua con gas.jpg"],
].map((p,i)=>({id:i,cat:p[0],name:p[1],desc:p[2],price:p[3],img:p[4]}));

const cats = ["Todos", ...new Set(P.map(p => p.cat))];
let current = "Todos", cart = {};
const $ = id => document.getElementById(id);
const money = n => "S/ " + n.toFixed(2);

function renderFilters() {
  $("filters").innerHTML = cats.map(c =>
    `<button class="chip ${c === current ? "active" : ""}" onclick="setCat('${c}')">${c}</button>`).join("");
}

function renderGrid(){
  $("grid").innerHTML = P.filter(p => current==="Todos" || p.cat===current).map(p => `
    <div class="gp-card">
      <div class="gp-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="gp-info">
        <h6 class="gp-name">${p.name}</h6>
        <h6 class="gp-desc">${p.desc}</h6>
        <div class="gp-foot">
          <span class="gp-price">${money(p.price)}</span>
          <button class="gp-add" onclick="add(${p.id})" aria-label="Agregar ${p.name}">+</button>
        </div>
      </div>
    </div>`).join("");
}

function setCat(c) { current = c; renderFilters(); renderGrid(); }
function add(id) { cart[id] = (cart[id] || 0) + 1; renderCart(); }
function chg(id, d) { cart[id] = (cart[id] || 0) + d; if (cart[id] <= 0) delete cart[id]; renderCart(); }

function renderCart() {
  const ids = Object.keys(cart);
  let total = 0, count = 0;
  $("items").innerHTML = ids.length ? ids.map(id => {
    const p = P[id], q = cart[id];
    total += p.price * q; count += q;
    return `<div class="item">
      <div style="flex:1"><b>${p.name}</b><br>${money(p.price * q)}</div>
      <div class="qty"><button onclick="chg(${id},-1)">−</button>${q}<button onclick="chg(${id},1)">+</button></div>
    </div>`;
  }).join("") : `<p class="empty">Aún no agregas productos</p>`;

  $("total").textContent = $("barTotal").textContent = money(total);
  $("barCount").textContent = count + (count === 1 ? " producto" : " productos") + " · Ver pedido";
  $("bar").classList.toggle("show", count > 0);
  $("orderBtn").disabled = !count;
}

function toggle(open) { $("panel").classList.toggle("open", open); }

function pedir() {
  const ids = Object.keys(cart);
  if (!ids.length) return;
  let total = 0;
  const lines = ids.map(id => {
    const p = P[id], q = cart[id];
    total += p.price * q;
    return `• ${q} x ${p.name} - ${money(p.price * q)}`;
  });
  const n = $("nombre").value.trim(), nota = $("nota").value.trim();
  const msg = `Hola, quisiera realizar un pedido:\n${lines.join("\n")}\n\nTotal: ${money(total)}`
    + (n ? `\nNombre: ${n}` : "")
    + (nota ? `\nDirección/comentarios: ${nota}` : "");
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

if ($("grid")) {
  renderFilters();
  renderGrid();
  renderCart();
}
/*Producto*/
if (document.getElementById('pd-nombre')) {
  const q = new URLSearchParams(location.search);
  const nombre = q.get('nombre') || 'Producto';
  const desc = q.get('desc') || '';
  const img = q.get('img') || '';
  const precio = q.get('precio') || '';
  let cant = 1;

  document.title = nombre + ' - Gula Pura';
  document.getElementById('pd-nombre').textContent = nombre;
  document.getElementById('pd-desc').textContent = desc;
  document.getElementById('pd-precio').textContent = precio || 'Consulta el precio por WhatsApp';

  const im = document.getElementById('pd-img');
  im.src = img;
  im.alt = nombre;

  function actualizar() {
    document.getElementById('pd-cant').textContent = cant;
    const msg = `Hola, quisiera pedir: ${cant} x ${nombre}` + (precio ? ` (${precio})` : '');
    document.getElementById('pd-wa').href = 'https://wa.me/51957059897?text=' + encodeURIComponent(msg);
  }

  window.cambiar = function (d) {
    cant = Math.max(1, cant + d);
    actualizar();
  };

  actualizar();
}
