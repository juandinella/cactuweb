import menu from './menu'
import asyncFonts from '../tools/async-fonts';
import lazyImages from './lazyImages';

const general = () => {
  lazyImages();
  menu()

  asyncFonts({
    href: 'assets/css/fonts.css',
    observer: 'avenir',
  });
}

export default general
