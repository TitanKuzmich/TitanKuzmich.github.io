const modals = () =>{
    function bindModal(triggerSelector, modalSelector, modalClose) {

        //constants
        const modal = document.querySelector(modalSelector),                        //modal window
            trigger = document.querySelectorAll(triggerSelector),                   //triggers
            close = modalClose,
            modalBtnSubmit = document.querySelector('.modal__btn-submit'),
            modalSubmit = document.querySelector('.modal__submit');

        //open modals
        trigger.forEach(item => {
            item.addEventListener('click', ()=> {
                modal.classList.remove('hide');
                modalBtnSubmit.disabled = true;
            });
            document.body.addEventListener('keydown', closeModal);
        });

        // //close modals
        // modal.addEventListener('click', (e) => {
        //     const target = e.target;
        //
        //     if (target.classList.contains(close) || target === modal) {
        //         modal.classList.add('hide');
        //         modalSubmit.reset();
        //     }
        // });
        //
        // //close modals by key
        // document.body.addEventListener('keydown', (e) =>{
        //     if (e.key === 'Escape') {
        //         modal.classList.add('hide');
        //         modalSubmit.reset();
        //     }
        // });

        //close modals ordinary and by key
        const closeModal = e => {
          const target = e.target;

            if (target.classList.contains(close) || target === modal) {
                modal.classList.add('hide');
                modalSubmit.reset();
            }else if (e.key === 'Escape'){
                modal.classList.add('hide');
                modalSubmit.reset();
                document.body.removeEventListener('keydown', closeModal);
            }
        };

        //adding event listener to modal
        modal.addEventListener('click', closeModal);
    }

    //calling functions working with modals
    bindModal('.add__ad','.modal__add', 'modal__close');
    bindModal('.card', '.modal__item', 'modal__close');
};

export default modals;