'use strict';

let slider = document.querySelector('.slider');

//создание иконки буферизации
let downloadIcon = document.createElement('i');
downloadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", downloadIcon);

//стрелки переключения слайдера
let downloadLeftArrow = document.createElement('i');
downloadLeftArrow.classList.add('fas', 'fa-arrow-alt-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", downloadLeftArrow);

let downloadRightArrow = document.createElement('i');
downloadRightArrow.classList.add('fas', 'fa-arrow-alt-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", downloadRightArrow);

//слушатель событий
window.addEventListener('load', function() {
    //подгрузка левой стрелки
    downloadLeftArrow.addEventListener('click', function (){
        images.setNextLeftImage();

    });
    //подгрузка правой стрелки
    downloadRightArrow.addEventListener('click', function (){
        images.setNextRightImage();
        
    });

    images.init();
    //скрытие иконки буферизации при загрузке
    downloadIcon.style.display = 'none'
});

let images = {
    currentId: 0,
    slide: [],
    init() {
        this.slide = document.querySelectorAll('.slider__block');
        this.showImageWithCurrentId();
        this.swipe();
    },
    //показ слайда методом удаления класса hidden-slide 
    showImageWithCurrentId() {
        this.slide[this.currentId].classList.remove('hidden-slide');
    },
    //скрытие изображений
    hideVisibleImage() {
        document.querySelector('.slider__block:not(.hidden-slide)').classList.add('hidden-slide');
    },
    //автопрокрутка -->, каждые 3с
    //Не доделал функцию сброса таймера, поэтому есть баг, что при ручной работе
    //Накладывается функция смены слайда
    swipe() {
        setInterval(() => {
            this.setNextRightImage();
        }, 3000);
    },

    // Смена изображение <--
    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentId == 0) {
            this.currentId = this.slide.length - 1;
        } else {
            this.currentId--;
        }
        let currentSlide = this.slide[this.currentId];
        currentSlide.classList.add('fade-in');
        currentSlide.classList.remove('hidden-slide');
        setTimeout(() => {
            currentSlide.classList.remove('fade-in');
        }, 1000);
    },
    // Смена изображение -->
    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentId == this.slide.length - 1) {
            this.currentId = 0;
        } else {
            this.currentId++;
        }
        let currentSlide = this.slide[this.currentId];
        currentSlide.classList.add('fade-in');
        currentSlide.classList.remove('hidden-slide');
        setTimeout(() => {
            currentSlide.classList.remove('fade-in');
        }, 1000);
    },
};



