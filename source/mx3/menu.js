

let button = document.querySelector('.navbar-toggler');
let button_menu = document.querySelector('.button__icon');


button.addEventListener('click',function(){
	//let test = prompt("Test");
	button_menu.classList.toggle('button__icon_close');
	button_menu.classList.toggle('button__icon');
	


});
