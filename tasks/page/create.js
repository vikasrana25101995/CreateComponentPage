import { ReactPage } from './page.js';
import { ReactPageScss } from '../stylesheet/create_page_css.js';
import promptSync from 'prompt-sync';

const prompt  = promptSync();
const name = prompt('Name of the page :-> ');

var react_component = new ReactPage(name);
react_component.generate_pages_files();

var react_component_css = new ReactPageScss(name);
react_component_css.generate_css_file();
