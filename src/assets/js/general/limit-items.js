const limitItems = () => {
  const productList = document.querySelectorAll('.product-list');

  for (let i = 0; i < productList.length; i++) {
    let cards = productList[i].querySelectorAll('.card');
    for (let j = 0;(j < cards.length) && (j < 10); j++) {
      cards[j].classList.add('is-visible');
    }
  }
};

export default limitItems;
