import { ReactPage } from './page.js';
import { ReactPageScss } from '../stylesheet/create_page_css.js';
import promptSync from 'prompt-sync';

const prompt  = promptSync();
const name = prompt('Name of the page :-> ');

var react_component = new ReactPage(name);
react_component.create_page();

var react_component_css = new ReactPageScss(name);
react_component_css.create_css_file();
