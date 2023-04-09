/* eslint-disable import/named */
/* eslint-disable import/extensions */
import './style.scss';
import javascriptLogo from './javascript.svg';
import setupCalculator from './calculator.js';

document.querySelector('#app').innerHTML = `
  <div id="container">
    <div id="calculator">
      <h1><span>Calculator</span> <img src="${javascriptLogo}" alt="js" /></h1>
      <span id=console>
        <span id="inputs">0</span>
        <span id="output">= <span>0</span></span>
      </span>

      <div id="btn-container">
        <button id="ac">ac</button>
        <button id="del">c</button>
        <button id="percent">%</button>
        <button id="div">/</button>
        <button id="7">7</button>
        <button id="8">8</button>
        <button id="9">9</button>
        <button id="multi">X</button>
        <button id="4">4</button>
        <button id="5">5</button>
        <button id="6">6</button>
        <button id="sub">-</button>
        <button id="1">1</button>
        <button id="2">2</button>
        <button id="3">3</button>
        <button id="plus">+</button>
        <button id="zero">0</button>
        <button id="dot">.</button>
        <button id="=">=</button>
      </div>
    </div>
  </div>
`;

setupCalculator(document.querySelector('#calculator'));
