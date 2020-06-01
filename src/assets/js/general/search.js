const search = () => {
  const searchbox = document.getElementsByClassName('search--input')[0];

  const form = document.getElementById('search');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var keywords = searchbox.value.trim().length > 0
      ? new RegExp(searchbox.value.trim(), 'gi')
      : '';

    var postTitles = document.getElementsByClassName('card--title');

    for (var i = 0; i < postTitles.length; i++) {
      var title = postTitles[i];
      var parentCard = title.parentNode.parentNode.parentNode;

      parentCard.classList.toggle('is-hidden', !title.innerHTML.match(keywords))
    }
  });
};

export default search;
