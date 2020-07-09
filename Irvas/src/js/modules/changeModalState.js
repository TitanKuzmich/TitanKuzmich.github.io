import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) =>{
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
            windowWidth = document.querySelectorAll('#width'),
            windowHeight = document.querySelectorAll('#height'),
            windowType = document.querySelectorAll('#view_type'),
            windowProfil = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElements (event, elem, prop){
        elem.forEach((item, i) => {
            item.addEventListener('event', () => {
                state[prop] = i;
            });
        });
    }

    bindActionToElements('click', windowForm, 'form');
}

export default changeModalState;