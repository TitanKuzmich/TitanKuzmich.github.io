const workFlipCard = () => {
    const frontSide = document.querySelectorAll('.works__wrapper__card__flip__frontside'),
        backSide = document.querySelectorAll('.works__wrapper__card__flip__backside'),
        wrappers = document.querySelectorAll('.flip__wrapper'),
        more = document.querySelectorAll('.works__wrapper__card__flip__more'),
        back = document.querySelectorAll('.works__wrapper__card__flip__back');

    more.forEach((item, i) => {
        item.addEventListener('click', () => {
            frontSide[i].style.transform = 'rotateY(180deg)';
            wrappers[i].style.backgroundColor = 'black';
            backSide[i].style.transform = 'rotateY(360deg)';
        });
    });

    back.forEach((item, i) => {
        item.addEventListener('click', () => {
            frontSide[i].style.transform = 'rotateY(0deg)';
            wrappers[i].style.backgroundColor = 'white';
            backSide[i].style.transform = 'rotateY(180deg)';
        });
    });
};

export default workFlipCard;