const flipCard = (front, back, flipForward = '.more', flipBack = '.back') => {
    const frontSide = document.querySelectorAll(front),
        backSide = document.querySelectorAll(back),
        moreBtn = document.querySelectorAll(flipForward),
        backBtn = document.querySelectorAll(flipBack);

    moreBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            frontSide[i].style.transform = 'rotateY(180deg)';
            backSide[i].style.transform = 'rotateY(360deg)';
        });
    });

    backBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            frontSide[i].style.transform = 'rotateY(0deg)';
            backSide[i].style.transform = 'rotateY(180deg)';
        });
    });
};

export default flipCard;