const forms = () => {
    function submit () {

        //data array from submit-form
        const dataBase = [];

        //constants
        const modal = document.querySelector('.modal__add'),
            modalSubmit = document.querySelector('.modal__submit'),
            elementModalSubmit = [...modalSubmit.elements].filter(elem => elem.tagName !== 'BUTTON' && elem.type !== 'submit'),
            modalBtnSubmit = document.querySelector('.modal__btn-submit'),
            modalBtnWarning = document.querySelector('.modal__btn-warning');

        //check if all data has been entered
        modalSubmit.addEventListener('input', () => {
           const validForm = elementModalSubmit.every(elem => elem.value);
            modalBtnSubmit.disabled = !validForm;
            modalBtnWarning.style.display = validForm ? 'none' : '';
        });

        //pushing data without reloading the page
        modalSubmit.addEventListener('submit', event => {
           event.preventDefault();
           const itemObj = {};
           for (const  elem of elementModalSubmit){
               itemObj[elem.name] = elem.value;
           }
           dataBase.push(itemObj);
           //console.log(dataBase);
           modal.classList.add('hide');
           modalSubmit.reset();
        });
    }

    submit();
};

export default forms;