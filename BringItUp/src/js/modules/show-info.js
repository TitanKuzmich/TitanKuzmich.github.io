export default class ShowInfo {
    constructor (triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            let i = 0;
            btn.closest('.module__info-show').previousElementSibling.classList.add('msg');

            btn.addEventListener('click', () => {
                const sibling = btn.closest('.module__info-show').previousElementSibling;
                i++;
                if(i%2 !== 0) {
                    btn.closest('.module__info-show').classList.add('animated', 'slideInDown');
                    btn.closest('.module__info-show').classList.remove('slideInUp');

                    sibling.classList.remove('msg');
                    sibling.classList.add('animated', 'fadeIn');
                    sibling.style.marginTop = '20px';

                    setTimeout(() => {
                        btn.closest('.module__info-show').classList.remove('slideInDown');
                        sibling.classList.remove('fadeIn');
                    }, 800);
                }else{
                    sibling.classList.add('msg');
                    btn.closest('.module__info-show').classList.add('slideInUp');
                }
            });
        });
    }
}