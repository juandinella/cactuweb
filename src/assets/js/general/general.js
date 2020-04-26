import menu from './menu'
import asyncFonts from '../tools/async-fonts';
import filters from './filters';
import search from './search';
import accordion from './faq'

const general = () => {
  menu()
  filters()
  search()
  accordion()

  asyncFonts({
    href: 'assets/css/fonts.css',
    observer: 'avenir',
  });
}

export default general
