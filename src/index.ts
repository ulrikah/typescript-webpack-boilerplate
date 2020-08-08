import './style.css';
import * as _ from 'lodash';
import sketch from './sketch';
import p5 from 'p5';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = "Click me";

    element.appendChild(btn);

    return element;
  }
  
document.body.appendChild(component());

new p5(sketch);
