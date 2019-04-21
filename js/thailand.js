
let introduccion = document.getElementById('introduccion');
let contenedor = document.getElementById('tituloPrincipal');
let navegador = document.querySelector('nav');
let menuPrincipal = document.getElementById('menuPpal');
let primerLi = document.getElementById('primerLi');
let equis = document.getElementById('equis');
let alink = document.querySelector('.alink');

setTimeout(function(){ introduccion.classList.add('desaparece') }, 2500);
setTimeout(function(){ introduccion.style.display = 'none' }, 3000);
setTimeout(function(){ contenedor.classList.add('showUp')  }, 3500);
setTimeout(function(){ navegador.classList.add('showUp')  }, 4300);

function loadMenu(){
	menuPpal.style.display = 'flex';
	menuPpal.classList.add('mostrando');
	menuPpal.classList.remove('ocultando');
	setTimeout(function(){ primerLi.classList.add('mostrar'); } , 1100);
}

function closeMenu(){
	menuPpal.style.display = 'flex';
	menuPpal.classList.remove('mostrando');
	menuPpal.classList.add('ocultando');
}

function goDown(){
	document.querySelector('#tours').scrollIntoView({block: "start", behavior: "smooth"});
		menuPpal.style.display = 'flex';
		menuPpal.classList.remove('mostrando');
		menuPpal.classList.add('ocultando');
}

function goHome(){
	document.querySelector('#cabecera').scrollIntoView({block: "start", behavior: "smooth"});
		menuPpal.style.display = 'flex';
		menuPpal.classList.remove('mostrando');
		menuPpal.classList.add('ocultando');
}

function goTours(){
	document.querySelector('#tours').scrollIntoView({block: "start", behavior: "smooth"});
		menuPpal.style.display = 'flex';
		menuPpal.classList.remove('mostrando');
		menuPpal.classList.add('ocultando');
}

function goDiscover(){
	document.querySelector('#discover').scrollIntoView({block: "start", behavior: "smooth"});
		menuPpal.style.display = 'flex';
		menuPpal.classList.remove('mostrando');
		menuPpal.classList.add('ocultando');
}

function goPackages(){
	document.querySelector('#packages').scrollIntoView({block: "start", behavior: "smooth"});
		menuPpal.style.display = 'flex';
		menuPpal.classList.remove('mostrando');
		menuPpal.classList.add('ocultando');
}

function goBlog(){
	document.querySelector('#blog').scrollIntoView({block: "start", behavior: "smooth"});
		menuPpal.style.display = 'flex';
		menuPpal.classList.remove('mostrando');
		menuPpal.classList.add('ocultando');
}

function goFooter(){
	document.querySelector('footer').scrollIntoView({block: "start", behavior: "smooth"});
		menuPpal.style.display = 'flex';
		menuPpal.classList.remove('mostrando');
		menuPpal.classList.add('ocultando');
}

function pantallaSize(){
	if ( window.innerHeight > 351){
		console.log("scrolling");
	}
}


