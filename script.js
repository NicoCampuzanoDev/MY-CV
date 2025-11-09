// Efecto de aparición al hacer scroll
const cards = document.querySelectorAll(".project-card, .timeline li");

function showOnScroll() {
  const trigger = window.innerHeight * 0.8;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);

// Inicializa el efecto
showOnScroll();
