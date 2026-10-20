const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    sections.forEach(section => {
      section.classList.add('hidden');
    });

    const targetId = link.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.classList.remove('hidden');
    }
  });
});

