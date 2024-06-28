jQuery.noConflict();
const $ = window.jQuery;

// Функция переиспользования ellipse
const getParamsEllipse = () => {
  const mainElement = document.getElementById("mainEllipse");
  const secondaryElements = document.querySelectorAll("#secondaryEllipse");

  if (mainElement) {
  // Получаем ширину главного элемента и применяем для вторичных
  const mainElementWidth = window.getComputedStyle(mainElement).width;
  secondaryElements.forEach((e) => (e.style.width = mainElementWidth));
  }
};

getParamsEllipse();

// Hidden and show more Btns
const buttons = document.querySelectorAll(".button-more");
const location = document.location.pathname;


buttons.forEach(btn => {
  const blockId = btn.getAttribute("data-block-id");
  const block = document.getElementById(blockId);

  const svgShowMore = `
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Vector 3" d="M11 6.46237L6.02516 1.4875L1 6.5127" stroke="#36C811"/>
    </svg>
  `;

  const svgHide = `
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Vector 3" d="M11 0.53763L6.02516 5.5125L1 0.4873" stroke="#36C811"/>
    </svg>
  `;
  if (location !== '/') {
    const text = btn.innerText === "Скрыть" ? "Показать больше" : "Скрыть";
    btn.textContent = text;

    const svgCode = btn.innerText !== "Показать больше" ? svgShowMore : svgHide;
    btn.innerHTML = text + svgCode;

    btn.addEventListener("click", () => {
      block.classList.toggle("hidden");

      const newText = btn.innerText === "Скрыть" ? "Показать больше" : "Скрыть";
      btn.textContent = newText;

      const svgCode = btn.innerText !== "Скрыть" ? svgHide : svgShowMore;
      btn.innerHTML = newText + svgCode;
    })
  } else {
    const text = btn.innerText === "Показать больше" ? "Скрыть" : "Показать больше";
    btn.textContent = text;
  
    const svgCode = btn.innerText === "Показать больше" ? svgShowMore : svgHide;
    btn.innerHTML = text + svgHide;
    
    if (blockId === "block-1") {
      btn.textContent = "Скрыть";
      btn.innerHTML = "Скрыть" + svgCode;
      block.classList.remove("hidden");
    } else {
      block.classList.add("hidden");
    }
  
    btn.addEventListener("click", () => {
      block.classList.toggle("hidden");
  
      const newText = btn.innerText === "Показать больше" ? "Скрыть" : "Показать больше";
      btn.textContent = newText;
  
      const svgCode = btn.innerText !== "Показать больше" ? svgShowMore : svgHide;
      btn.innerHTML = newText + svgCode;
    })
  }
})

// Устанавливаем дополнительное смещение к якорю
window.addEventListener('load', function() {
  let linksAnchors;
  let hashAnchors;

  const linksAnchors1440 = {
    '.scroll-link-services': 80,
    '.scroll-link-projects': -80,
    '.scroll-link-reviews': -80,
    '.scroll-link-aboutUs': 0,
  };
  const hashAnchors1440 = {
    'services': 80,
    'projects': -80,
    'reviews': -80,
    'aboutUs': 0,
  };

  const linksAnchors768 = {
    '.scroll-link-services': 10,
    '.scroll-link-projects': 20,
    '.scroll-link-reviews': 10,
    '.scroll-link-aboutUs': 50,
  };
  const hashAnchors768 = {
    'services': 10,
    'projects': 20,
    'reviews': 10,
    'aboutUs': 50,
  };

  const linksAnchors360 = {
    '.scroll-link-services': 20,
    '.scroll-link-projects': 20,
    '.scroll-link-reviews': 20,
    '.scroll-link-aboutUs': 20,
  };
  const hashAnchors360 = {
    'services': 20,
    'projects': 20,
    'reviews': 20,
    'aboutUs': 20,
  };

  if (window.innerWidth >= 1440) {
    linksAnchors = linksAnchors1440;
    hashAnchors = hashAnchors1440;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1439) {
    linksAnchors = linksAnchors768;
    hashAnchors = hashAnchors768;
  } else if (window.innerWidth < 768) {
    linksAnchors = linksAnchors360;
    hashAnchors = hashAnchors360;
  }
// Получаем хэш из URL и убираем решётку
  const hash = window.location.hash.substr(1);
// Проверяем, есть ли хэш и существует ли элемент с этим id
  if (hash && document.getElementById(hash)) {
// Смещение
    const offsetTop = document.getElementById(hash).getBoundingClientRect().top + window.pageYOffset - hashAnchors[hash];
// Прокручиваем к элементу с учётом смещения
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

// Добавляем обработчик события клика на все элементы с классом
  Object.keys(linksAnchors).forEach(selector => {
    document.querySelectorAll(selector).forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
// Смещение
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - linksAnchors[selector];
// Прокручиваем к элементу с учётом смещения
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
});

// window.addEventListener('resize', setDynamicHeight);
  
//   function setDynamicHeight() {
//     const windowHeight = window.innerHeight;
//     const windowWidth = window.innerWidth;
//     const blockBgElements = document.querySelectorAll('.block__bg');
//     if (blockBgElements) {
//       blockBgElements.forEach((element) => {
//         let heightRatio = windowWidth > 1440 ? 48 : 39;
//         element.style.height = windowHeight * heightRatio / 100 + 'px';
//       });
//     }
//   }

// setDynamicHeight();