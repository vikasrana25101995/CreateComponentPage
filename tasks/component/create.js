import { ReactComponent } from './component.js';
import { ReactComponentScss } from '../stylesheet/create_component_css.js';
import promptSync from 'prompt-sync';

const prompt  = promptSync();
const name = prompt('Name of the component :-> ');

var react_component = new ReactComponent(name);
react_component.generate_components_files();

var react_component_css = new ReactComponentScss(name);
react_component_css.generate_css_file();
