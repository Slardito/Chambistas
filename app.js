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