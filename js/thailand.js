
let introduccion = document.getElementById('introduccion');
let contenedor = document.getElementById('tituloPrincipal');
let navegador = document.querySelector('nav');

setTimeout(function(){ introduccion.classList.add('desaparece') }, 2500);
setTimeout(function(){ introduccion.style.display = 'none' }, 3000);
setTimeout(function(){ contenedor.classList.add('showUp')  }, 3500);
setTimeout(function(){ navegador.classList.add('showUp')  }, 4300);


