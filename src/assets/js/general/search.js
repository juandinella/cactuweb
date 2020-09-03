const search = () => {
  const searchbox = document.getElementsByClassName('search--input')[0];
  const form = document.getElementById('search');

  const removeAccents = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var keywords = searchbox.value.trim().length > 0
      ? new RegExp(removeAccents(searchbox.value.trim()), 'gi')
      : '';

    var postTitles = document.getElementsByClassName('card--title');

    for (var i = 0; i < postTitles.length; i++) {
      var title = postTitles[i];
      var parentCard = title.parentNode.parentNode.parentNode;
      removeAccents(title.innerHTML);

      parentCard.classList.toggle('is-hidden', !removeAccents(title.innerHTML).match(keywords))
    }
  });
};

export default search;
