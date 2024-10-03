const title = document.querySelector('.title');
title.style.opacity = 0; 
window.addEventListener('load', () => {
 title.style.transition = 'opacity 1s ease-in-out'; 
 title.style.opacity = 1; 
});

// Изменение цвета ссылок при наведении
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
 link.addEventListener('mouseover', () => {
  link.style.color = '#ff8c00'; 
 });
 link.addEventListener('mouseout', () => {
  link.style.color = '#333';
 });
});
