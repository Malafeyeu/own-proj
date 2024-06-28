jQuery.noConflict();
const $ = window.jQuery;

// Функция для открытия бургер-меню
const openBurgerMenu = () => {
  $(".menu").addClass("active");
  $(".menu__overlay").addClass("active");
  $(".root").css("overflow", "hidden");
};

// Функция для закрытия бургер-меню
const closeBurgerMenu = () => {
  $(".menu").removeClass("active");
  $(".menu__overlay").removeClass("active");
  $(".root").css("overflow", "");
};

// Обработчик клика по бургеру для открытия меню
$("#burger-menu").on("click", () => {
  openBurgerMenu();
});

// Обработчик клика по затемненной области для закрытия меню
$(".menu__overlay").on("click", () => {
  closeBurgerMenu();
});

$(".scroll-link-services").on("click", () => {
  closeBurgerMenu();
})
$(".scroll-link-aboutUs").on("click", () => {
  closeBurgerMenu();
})
$(".scroll-link-projects").on("click", () => {
  closeBurgerMenu();
})