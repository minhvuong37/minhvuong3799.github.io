
function openNav() {
	var $ = document.querySelector(".nav__mobile");
	var $$ = document.querySelector(".nav__overlay");
	$.style.transform = 'translateX(0)';
	$.style.transition = 'transform linear 0.2s';
	$$.style.display = 'block';
}
function closeNav() {
	var $ = document.querySelector(".nav__mobile");
	var $$ = document.querySelector(".nav__overlay");
	$.style.transform = 'translateX(-100%)'
	$$.style.display = 'none'
}
function toRegister() {
	var $ = document.querySelector(".container__register-form");
	var $$ = document.querySelector(".nav__overlay");
	$.style.display = "block"
	$$.style.display = 'block';
}
function toLogin() {
	// document.querySelector(".nav__mobile").style.display='none';
	var $ = document.querySelector(".container__login-form");
	var $$ = document.querySelector(".nav__overlay");
	$.style.display = "block";
	$$.style.display = 'block';	
}
function toClose() {
	var $$ = document.querySelector(".nav__overlay");
	var $ = document.querySelector(".container__login-form");
	var $$$ = document.querySelector(".container__register-form");
	$$.style.display = 'none';
	$.style.display= 'none';
	$$$.style.display = 'none';
}
function toChange() {
	var $ = document.querySelector(".container__login-form");
	var $$ = document.querySelector(".container__register-form");
	$.style.display=  'none';
	$$.style.display = 'block';
}


// var slideIndex;
//   // KHai bào hàm hiển thị slide
// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
 
//     slides[slideIndex].style.display = 'block';  
//     dots[slideIndex].className += " active";
//       //chuyển đến slide tiếp theo
//     slideIndex++;
//       //nếu đang ở slide cuối cùng thì chuyển về slide đầu
//     if (slideIndex > slides.length - 1) {
//       slideIndex = 0
//     }    
//       //tự động chuyển đổi slide sau 5s
//     setTimeout(showSlides, 5000);
//   	}
//   //mặc định hiển thị slide đầu tiên 
//   	showSlides(slideIndex = 0);
 
 
//   	function currentSlide(n) {
//   		showSlides(slideIndex = n);
//   	}