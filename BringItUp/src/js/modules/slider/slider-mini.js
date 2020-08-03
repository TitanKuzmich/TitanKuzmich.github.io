import Slider from "./slider";

export default class MiniSlider extends Slider{
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
        this.paused = false;
    }

    decorizeSlides(){
        this.slides.forEach(slide => {
           slide.classList.remove(this.activeClass, 'fadeIn');
           slide.classList.add('animated');
            if(this.animate){
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if(!this.slides[0].closest('button')){
            this.slides[0].classList.add(this.activeClass);
        }

        if(this.animate){
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }


    nextSlide() {
        // if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
        //     this.container.appendChild(this.slides[0]); // Slide
        //     this.container.appendChild(this.slides[1]); // Btn
        //     this.container.appendChild(this.slides[2]); // Btn
        //     this.decorizeSlides();
        // } else if (this.slides[1].tagName == "BUTTON"){
        //     this.container.appendChild(this.slides[0]); // Slide
        //     this.container.appendChild(this.slides[1]); // Btn
        //     this.decorizeSlides();
        // } else {
        //     this.container.appendChild(this.slides[0]);
        //     this.decorizeSlides();
        // }

        // for (let i = 0; i < this.slides.length; i++) {
        //     this.slides[i].classList.add('slideInRight');
        //     this.slides[i].classList.remove('slideInLeft');
        //     setTimeout(()=>{
        //         this.slides[i].classList.remove('slideInRight');
        //     }, 800)
        // }

        if (this.slides[this.slides.length - 1].tagName == "BUTTON") {
            for (let i = 0; i < this.slides.length; i++) {
                if (this.slides[i].tagName == "BUTTON") {
                    this.container.insertBefore(this.slides[0], this.slides[i]);
                    this.decorizeSlides();
                    break;
                }
            }
        }else {
            this.container.appendChild(this.slides[0]);
            this.decorizeSlides();
        }
        this.slides[0].classList.add('fadeIn');
    }

    bindTriggers(){
        this.next.addEventListener('click', ()=>this.nextSlide());

        this.prev.addEventListener('click', ()=>{
            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
            }
            this.slides[0].classList.add('fadeIn');
        });
    }

    autoPlay() {
        this.paused = setInterval(()=>this.nextSlide(), 3000);
    }

    pauseOnMouseEnter(){
        this.container.addEventListener('mouseenter', () => {
            clearInterval(this.paused);
        });
        this.next.addEventListener('mouseenter', () => {
            clearInterval(this.paused);
        });
        this.prev.addEventListener('mouseenter', () => {
            clearInterval(this.paused);
        });

        this.container.addEventListener('mouseleave', () => {
            this.autoPlay();
        });
        this.next.addEventListener('mouseleave', () => {
            this.autoPlay();
        });
        this.prev.addEventListener('mouseleave', () => {
            this.autoPlay();
        });
    }

    init(){
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

            this.bindTriggers();
            this.decorizeSlides();
            if(this.autoplay){
                this.autoPlay();
                this.pauseOnMouseEnter();
            }
        }catch (e) {

        }
    }
}