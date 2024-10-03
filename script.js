const title = document.querySelector('.title');
title.style.opacity = 0; 
window.addEventListener('load', () => {
 title.style.transition = 'opacity 1s ease-in-out'; 
 title.style.opacity = 1; 
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
 link.addEventListener('mouseover', () => {
  link.style.color = '#fff'; 
  link.style.backgroundColor = '#ff8c00'; 
 });
 link.addEventListener('mouseout', () => {
  link.style.color = '#333'; 
  link.style.backgroundColor = 'transparent'; 
 });
});
