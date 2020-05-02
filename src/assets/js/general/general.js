import asyncFonts from '../tools/async-fonts';
import filters from './filters';
import search from './search';
import accordion from './faq'
import limitItems from './limit-items'

const general = () => {
  filters()
  if (document.querySelector('.search')) {
    search();
  }

  accordion()
  limitItems()

  asyncFonts({
    href: 'assets/css/fonts.css',
    observer: 'avenir',
  });
}

export default general
