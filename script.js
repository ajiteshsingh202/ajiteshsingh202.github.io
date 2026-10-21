const nav = document.getElementById('nav');
document.getElementById('menu').onclick = () => nav.classList.toggle('open');
nav.onclick = () => nav.classList.remove('open');
document.getElementById('yr').textContent = new Date().getFullYear();

// Replace with the shop's WhatsApp number (country code, no +)
const WA_NUMBER = '919821539746';

document.getElementById('form').onsubmit = e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const text = `Hello, I'm ${f.get('name')} (${f.get('phone')}).\n${f.get('msg')}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
};
