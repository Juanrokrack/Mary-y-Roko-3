// Contador de tiempo juntos desde el 1 de marzo de 2025
function actualizarContador() {
  const inicio = new Date(2025, 2, 1); // meses en JS empiezan en 0 -> 2 = marzo
  const ahora = new Date();

  let years = ahora.getFullYear() - inicio.getFullYear();
  let months = ahora.getMonth() - inicio.getMonth();
  let days = ahora.getDate() - inicio.getDate();

  if (days < 0) {
    months -= 1;
    const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
    days += mesAnterior.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearsEl = document.getElementById('years');
  const monthsEl = document.getElementById('months');
  const daysEl = document.getElementById('days');

  if (yearsEl) yearsEl.textContent = Math.max(years, 0);
  if (monthsEl) monthsEl.textContent = Math.max(months, 0);
  if (daysEl) daysEl.textContent = Math.max(days, 0);
}

actualizarContador();

// Corazones flotando de fondo
function crearCorazones() {
  const contenedor = document.getElementById('floaters');
  if (!contenedor) return;

  const simbolos = ['💗', '💕', '💖'];
  const cantidad = 16;

  for (let i = 0; i < cantidad; i++) {
    const span = document.createElement('span');
    span.className = 'floater';
    span.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.fontSize = (1 + Math.random() * 1.4) + 'rem';
    span.style.animationDuration = (10 + Math.random() * 14) + 's';
    span.style.animationDelay = (Math.random() * 14) + 's';
    contenedor.appendChild(span);
  }
}

crearCorazones();

// Animación de aparición al hacer scroll para cada evento del timeline
const eventos = document.querySelectorAll('.evento');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

eventos.forEach(evento => {
  evento.style.opacity = '0';
  evento.style.transform = 'translateY(24px)';
  evento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(evento);
});

// Formulario chistoso de "registro"
const registroForm = document.getElementById('registroForm');
const registroResultado = document.getElementById('registroResultado');

if (registroForm) {
  registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    registroResultado.textContent = '¡registro confirmado! sigues siendo oficialmente mi novia 💗';
  });
}
