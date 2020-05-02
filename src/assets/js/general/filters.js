const filters = () => {
  // Find list of items with a class of filters
  const filters = document.querySelectorAll('.filters--item');
  function toggleFilter (e) {
    e.preventDefault(); // Prevent link from working.

    // Remove Selected class from other filters.
    for (let i = 0; i < filters.length; i++) {
      filters[i].classList.remove('is-selected');
    }
    // Add selected class to this filter.
    this.classList.add('is-selected');
    // Grab all Items.
    const all = document.querySelectorAll('.product-list--section .card');
    // If selecting filter "All", then show all items.
    if (this.dataset.filter === 'all') {
      for (let j = 0; j < all.length; j++) {
        all[j].classList.remove('is-hidden');
      }
      // Otherwise, filter by the data-attribute of filter that is set.
    } else {
      const filter = this.dataset.filter;
      // First off, is-hidden all elements.
      for (let k = 0; k < all.length; k++) {
        all[k].classList.add('is-hidden');
      }
      // Now show all elements that match.
      const selected = document.querySelectorAll(`.product-list--section .${filter}`);
      for (let h = 0; h < selected.length; h++) {
        selected[h].classList.remove('is-hidden');
      }
    }
  }

  // Even Listener on any Filter that is clicked.
  filters.forEach(filter => filter.addEventListener('click', toggleFilter));
};

export default filters;
