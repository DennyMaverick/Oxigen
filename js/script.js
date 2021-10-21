window.addEventListener("DOMContentLoaded", function () {
// Наведение на меню навигации
  const pricingItems = document.querySelectorAll('.pricing__item');
  // Получаем все ссылки, находящиеся в навигации 
  const menuLinks = document.querySelectorAll("[data-link-menu]");
  const portfolioNavItems = document.querySelectorAll("[data-portfolio-nav]");
// коллекция ссылок в меню модального окна
const menuModalLinks = document.querySelectorAll('.menu-list__link');


  const closeBtn = document.querySelector('.close-modal');
  const homeLink = document.querySelector("#homeLink");
  const firstNavItem = document.querySelector("#firstItem");
  const modalMenu = document.querySelector('.modal-menu');

  // Отслеживаем событие при наведении
  // Menu nav header
  menuLinks.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      // удаляем с каждой ссылки класс menu__link--active
      menuLinks.forEach(function (item) {
        item.classList.remove("menu__link--active");
      });
      // добавляем класс menu__link--active к текущей ссылке
      this.classList.add("menu__link--active");
    });
  });
  // Блок кода, если нужно, чтобы первая ссылка меню - home - была подчеркнута после отведения мыши
  menuLinks.forEach(function (item) {
    // Отслеживаем отведение мыши от каждой ссылки
    item.addEventListener("mouseleave", function () {
      // Ссылке, от которой отводим мышь, удаляем класс menu__link--active
      this.classList.remove("menu__link--active");

      // добавляем класс menu__link--active самой первой ссылке, когда отводим мышь от ссылки
      homeLink.classList.add("menu__link--active");
    });
  });

 // Отслеживаем событие при наведении
  // Menu nav portfolio
  portfolioNavItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      // Удаление активного элемента у всех
      portfolioNavItems.forEach(function(item) {
        item.classList.remove("portfolio__nav-item--active");
      });
      this.classList.add("portfolio__nav-item--active");
    });
  });
   // Отслеживаем событие при отвода мыши
  // Menu nav portfolio
  portfolioNavItems.forEach(function(item) {
    item.addEventListener("mouseleave", function() {
      portfolioNavItems.forEach(function(item) {
        item.classList.remove("portfolio__nav-item--active");
      });
      firstNavItem.classList.add("portfolio__nav-item--active")
    })
  });
// Появление / cкрытие бургер-меню при изменении размера экрана

  const menuNav = document.querySelector('.menu__list');
  const burgerMenu = document.querySelector('.burger-menu');

  
  if (document.documentElement.clientWidth < 901) {
    menuNav.classList.add('hidden');
    burgerMenu.classList.remove('burger-hidden');
  } else if (document.documentElement.clientWidth > 901) {
    menuNav.classList.remove('hidden');
    burgerMenu.classList.add('burger-hidden');
  }

    window.addEventListener('resize', function() {
        if (document.documentElement.clientWidth < 901) {
          menuNav.classList.add('hidden');
          burgerMenu.classList.remove('burger-hidden');

// Открытие / закрытие модального окна-меню при изменении окна
          
        } else if (document.documentElement.clientWidth > 901){
          menuNav.classList.remove('hidden');
          burgerMenu.classList.add('burger-hidden');
          modalMenu.classList.remove('modal-menu-default');
        }
      });
 
       
    // Открытие / закрытие модального окна-меню
   

    burgerMenu.addEventListener('click', function() {
      // modalMenu.classList.remove('hidden-modal-menu');
      modalMenu.classList.add('modal-menu-default');
         closeBtn.classList.add('close-modal-show');
    });
    // При нажатии на крестик
    closeBtn.addEventListener('click', function() {
      modalMenu.classList.remove('modal-menu-default');
      closeBtn.classList.remove('close-modal-show');
    });
// Скрытие модального окна при нажатии на ссылку в меню этого окна
  menuModalLinks.forEach(function(item) {
    item.addEventListener('click', function() {
      modalMenu.classList.remove('modal-menu-default');
      closeBtn.classList.remove('close-modal-show');
    });
  });

  // При прокрутке страницы менять свойства header__top
  const headerTop = document.querySelector('.header__top');
 
  headerTopChanging();

  window.addEventListener('scroll', function() {
    headerTopChanging();
  });

  function headerTopChanging() {
    const scrollSize = window.pageYOffset; //Высота скролла
    const pixels = 70;
    if (scrollSize > pixels) {
      headerTop.style.boxShadow = "2px 2px 10px #020202";
      headerTop.style.backgroundColor = "white";
    } else {
      headerTop.style.boxShadow = "none";
      headerTop.style.backgroundColor = "transparent";
    }
  }
  // Убирать класс pricing__item--stabart со всех карточек при нажатии 
  pricingItems.forEach(function(item) {
    item.addEventListener('click', function() {
      pricingItems.forEach(function(item) {
        item.classList.remove('pricing__item--stabart');
      });
      this.classList.add('pricing__item--stabart');
    });
  });

  // Убирать класс pricing__item--stabart со всех карточек при наведении 
  pricingItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      pricingItems.forEach(function(item) {
        item.classList.remove('pricing__item--stabart');
      });
      this.classList.add('pricing__item--stabart');
    });
  });
 
});
