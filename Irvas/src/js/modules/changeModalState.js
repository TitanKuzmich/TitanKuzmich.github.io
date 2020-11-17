import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox'),
        imageParam = document.querySelector('.img_res'),
        widthParam = document.querySelector('.width_value'),
        heightParam = document.querySelector('.height_value'),
        typeParam = document.querySelector('.type_value'),
        profileParam = document.querySelector('.profile_value');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        imageParam.setAttribute("src", `assets/img/modal_calc/balkon/type${i + 1}.png`)
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            typeParam.innerHTML = state[prop];
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                            if (prop === "width")
                                widthParam.innerHTML = state[prop];
                            else
                                heightParam.innerHTML = state[prop];
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        profileParam.innerHTML = state[prop];
                        break;
                }
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;