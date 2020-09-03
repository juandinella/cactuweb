const limitItems = () => {
  const productList = document.querySelectorAll('.limit-items');

  for (let i = 0; i < productList.length; i++) {
    const cards = productList[i].querySelectorAll('.card');
    for (let j = 0; (j < cards.length) && (j < 12); j++) {
      cards[j].classList.add('is-visible');
    }
  }
};

export default limitItems;
