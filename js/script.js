// Burger - меню
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener(
	"click",

	function () {
		burger.classList.toggle("burger--active");

		menu.classList.toggle("header__nav--active");
	}
);

menuLinks.forEach(function (element) {
	burger.classList.remove("burger--active");

	menu.classList.remove("header__nav--active");
});

// Search - кнопка поиска
let search = document.querySelector(".search");
let searchForm = document.querySelector(".search__form");
let searchClose = document.querySelector(".search__close");
let main = document.querySelector(".main");

search.addEventListener("click", function (el) {
	el.stopPropagation();
	searchForm.classList.add("search__form_active");
});

searchClose.addEventListener("click", function () {
	searchForm.classList.remove("search__form_active");
});

main.addEventListener("click", function () {
	searchForm.classList.remove("search__form_active");
});

// Hero - слайдер
const swiper = new Swiper(".swiper", {
	slidesPerGroup: 1,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
});

// How - табы
let tabsBtn = document.querySelectorAll(".tabs-nav__btn");
let tabsItem = document.querySelectorAll(".tabs-item");

tabsBtn.forEach(function (element) {
	element.addEventListener("click", function (e) {
		const path = e.currentTarget.dataset.path;

		tabsBtn.forEach(function (btn) {
			btn.classList.remove("tabs-nav__btn--active");
		});
		e.currentTarget.classList.add("tabs-nav__btn--active");

		tabsItem.forEach(function (element) {
			element.classList.remove("tabs-item--active");
		});
		document
			.querySelector(`[data-target="${path}"]`)
			.classList.add("tabs-item--active");
	});
});

// Faq - аккордеон
$(".accordion").accordion({
	heightStyle: "content",
	active: 0,
});
