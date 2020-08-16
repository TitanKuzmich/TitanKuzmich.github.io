let slider = function (sliderContainer) {
    const slider = document.querySelectorAll(sliderContainer);
    for(let i = 0; i < slider.length; i++){
        const width = window.getComputedStyle(slider[i].querySelector('.carousel-inner')).width;
        const slides = slider[i].querySelectorAll('.carousel-item');
        const slidesField = slider[i].querySelector('.carousel-slides');
        const dots = slider[i].querySelectorAll('.carousel-indicators li');
        const next = slider[i].querySelector('[data-slide="next"]');
        const prev = slider[i].querySelector('[data-slide="prev"]');
        const indicators =  slider[i].querySelectorAll(`.carousel-indicators li`);

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        next.addEventListener('click', (e) => {
            e.preventDefault();
            if(offset === (+width.replace(/\D/g, '') * (slides.length - 1))){
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slideIndex === slides.length - 1){
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        prev.addEventListener('click',(e) => {
            e.preventDefault();
            if(offset === 0){
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slideIndex === 0){
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });


       indicators.forEach(indicator => {
           indicator.addEventListener('click', (e) => {
               const slideTo = e.target.getAttribute('data-slide-to');

               slideIndex = slideTo;
               offset = +width.replace(/\D/g, '') * slideTo;

               slidesField.style.transform = `translateX(-${offset}px)`;
               dots.forEach(dot => dot.classList.remove('active'));
               dots[slideIndex].classList.add('active');
           });
       });
    }
};

export default slider;