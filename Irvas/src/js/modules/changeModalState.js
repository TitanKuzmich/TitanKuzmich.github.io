import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox'),
        imageParam = document.querySelector('.img_res'),
        widthParam = document.querySelector('.num_params_count .width_value'),
        heightParam = document.querySelector('.num_params_count .height_value'),
        typeParam = document.querySelector('.num_params_count .type_value'),
        profileParam = document.querySelector('.num_params_count .profile_value'),
        priceParam = document.querySelector('.num_params_count .price_value');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function countPrice() {
        let formCoef = 1;
        switch(imageParam.getAttribute("data-type")){
            case 1:
                typeCoef = 1.5;
                break;
            case 2:
                typeCoef = 2;
                break;
            case 3:
                typeCoef = 1.8;
                break;
            case 4:
                typeCoef = 2.3;
                break;
            default:
                typeCoef = 1;
        }

        let profileCoef = 1;
        switch(profileParam.innerHTML){
            case 'Деревянное остекление':
                profileCoef = 1.8;
                break;
            case 'Алюминиевое остекление':
                profileCoef = 1.7;
                break;
            case 'Остекление пластиковыми рамами':
                profileCoef = 2;
                break;
            case 'Панорамное остекление':
                profileCoef = 2.5;
                break;
            case 'Остекление с выносом':
                profileCoef = 2.4;
                break;
            default:
                profileCoef = 1;
        }
        let typeCoef = 1;
        switch(typeParam.innerHTML){
            case 'Холодное':
                typeCoef = 1.9;
                break;
            case 'Теплое':
                typeCoef = 2;
                break;
            default:
                typeCoef = 1;
        }

        priceParam.innerHTML = (Math.ceil(((widthParam.innerHTML * heightParam.innerHTML)/1000) * profileCoef * typeCoef * formCoef)).toString();
    }

    function bindActionToElems(event, elem, prop) {
        const defaultProps = {
            "width": 2300,
            "height": 1700,
            "type": "Холодное",
            "profile": "Деревянное остекление",
            "form": 1
        }

        widthParam.innerHTML = defaultProps.width;
        heightParam.innerHTML = defaultProps.height;
        profileParam.innerHTML = defaultProps.profile;
        typeParam.innerHTML = defaultProps.type;
        imageParam.setAttribute("src", `assets/img/modal_calc/balkon/type${defaultProps.form}.png`);
        imageParam.setAttribute("data-type", defaultProps.form);

        countPrice();

        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i + 1;
                        imageParam.setAttribute("src", `assets/img/modal_calc/balkon/type${state[prop]}.png`);
                        imageParam.setAttribute("data-type", state[prop]);
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
                countPrice();
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