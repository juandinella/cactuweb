import GLightbox from 'glightbox';

const productLightbox = () => {
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true
  });

  lightbox()
};

export default productLightbox;
