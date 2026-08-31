/* в этот файл добавляет скрипты*/

const burgerBtn = document.querySelector('.page-header__button');
const headerNavigationContent = document.querySelector('.page-header__list');

const slider = document.querySelector('.slider');
const range = document.querySelector('.slider__range-js');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('page-header__button--show');
  headerNavigationContent.classList.toggle('page-header__list--show');
});

if (slider && range) {
  range.addEventListener('input', () => {
    slider.style.setProperty('--value', `${range.value }%`);
  });
}
