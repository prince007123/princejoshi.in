// Mobile Menu toggle
const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('mobile-menu');
menuBtn.addEventListener('click',()=>{
  drawer.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', drawer.classList.contains('show'));
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    if(drawer.classList.contains('show')) drawer.classList.remove('show');
  });
});
