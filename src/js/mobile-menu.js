export function mobileMenu(element) {

  // if (window.scrollY > window.innerHeight) {

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      element.classList.remove('opacity-0', 'pointer-events-none');
      element.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      element.classList.add('opacity-0', 'pointer-events-none');
      element.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });
}



  