const workSlider = () => {
  const cards = document.querySelectorAll('.works__wrapper__card__slider'),
      more = document.querySelectorAll('.works__wrapper__card__more'),
      back = document.querySelectorAll('.works__wrapper__card__back');

    more.forEach((item, i) => {
      item.addEventListener('click', () => {
              cards[i].style.marginLeft = '-300px';
      });
    });

    back.forEach((item, i) => {
        item.addEventListener('click', () => {
            cards[i].style.marginLeft = '0';
        });
    });

};

export default workSlider;
