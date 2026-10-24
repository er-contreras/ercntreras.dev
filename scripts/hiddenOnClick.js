
document.addEventListener('click', (event) => {
  const link = event.target.closest('.nav-link');

  if (link) {
    event.preventDefault();

    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.add('hidden');
    });

    const targetId = link.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.classList.remove('hidden');
    }
  }
});
