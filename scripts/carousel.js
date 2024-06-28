jQuery.noConflict();
const $ = window.jQuery;

const carouselProjectsOptions = {
  loop: true,
  margin: 8,
  nav: false,
  dots: false,
  responsive: false,
  autoWidth: true
};

const carouselReviewsOptions = {
  loop: false,
  margin: 0,
  nav: true,
  dots: true,
  responsive: false,
  items: 1,
  dotsEach: true,
  center: true,
  navContainer: '.reviews__button',
  dotsContainer: '.reviews__pagination'
};

const carouselExamplesOptions = {
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  responsive: false,
  autoWidth: true,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 6000,
  autoplayHoverPause: true,
};

const carouselCasesOptions = {
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  responsive: false,
  autoWidth: true
}


// Функция для навешивания классов Owl-carousel
const addClassOnResize = () => {
  const elementCarouselProjects = $('.projects__images');
  const elementCarouselExamples = $('.examples__images');
  const elementCarouselReviews = $('.reviews__view');
  const elementCarouselCases = $('.footer__images');

  const configureCarouselProjects = () => {
    elementCarouselProjects.addClass('owl-carousel owl-theme');
    elementCarouselProjects.owlCarousel(carouselProjectsOptions);
  }

  const configureCarouselReviews = () => {
    elementCarouselReviews.addClass('owl-carousel owl-theme');
    elementCarouselReviews.owlCarousel(carouselReviewsOptions);
  }

  const configureCarouselBrandingReviews = () => {
    elementCarouselExamples.addClass('owl-carousel owl-theme');
    elementCarouselExamples.owlCarousel(carouselExamplesOptions);
  }

  const configureCarouselBlackzidCases = () => {
    elementCarouselCases.addClass('owl-carousel owl-theme');
    elementCarouselCases.owlCarousel(carouselCasesOptions);
  }

  const addCustomBtn = () => {
    const elementButtonReviewsNext = $('.owl-next');
    const elementButtonReviewsPrev = $('.owl-prev');
    // Создаем элемент изображения
    const btnSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="84" viewBox="0 0 85 84" >
      <mask id="mask0_1_197" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="85" height="85">
        <circle cx="42" cy="42" r="42" transform="matrix(-1 0 0 1 84.375 0.00878906)" />
      </mask>
      <g mask="url(#mask0_1_197)">
        <circle cx="42" cy="42" r="42" transform="matrix(-1 0 0 1 84.375 0.00878906)" />
        <path d="M42.231 47.1984H83.875V37.8191H42.231H41.0239L41.8774 36.9656L53.4987 25.343L46.8724 18.7159L23.0821 42.5088L46.8724 66.3016L53.4987 59.6746L41.8774 48.052L41.0239 47.1984H42.231Z" fill="white" stroke="white"/>
      </g>
    </svg> `;
    if (!elementCarouselCases) {
      elementButtonReviewsNext.append(btnSvg);
      elementButtonReviewsPrev.append(btnSvg);
    }
  }

  const checkWidthAndAddClass = () => {
    configureCarouselReviews();
    configureCarouselBrandingReviews();
    configureCarouselBlackzidCases();

    if (window.innerWidth <= 767 && !elementCarouselProjects.hasClass('owl-carousel')) {
      configureCarouselProjects();

    } else if (window.innerWidth > 767 && elementCarouselProjects.hasClass('owl-carousel')) {
      elementCarouselProjects.removeClass('owl-carousel owl-theme').trigger('destroy.owl.carousel');
    }
  }

  checkWidthAndAddClass();
  addCustomBtn();
}

addClassOnResize();