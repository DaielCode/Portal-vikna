export function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (el) {
    const navbarHeight = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
