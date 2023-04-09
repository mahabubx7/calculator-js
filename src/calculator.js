/* eslint-disable no-await-in-loop */
/* eslint-disable import/extensions */
/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import Calculator from './lib/Calculator.js';

function setupCalculator(element) {
  let consoleStr = '0';
  const resetConsoleStr = () => {
    // C
    element.querySelector('#console #inputs').innerHTML = `${consoleStr}`;
  };

  const resetAllConsoleStr = () => {
    // AC
    consoleStr = '0';
    element.querySelector('#console #inputs').innerHTML = '0';
    element.querySelector('#console #output span').innerHTML = '0';
  };

  const updateConsoleStr = (str) => {
    consoleStr = consoleStr.toLowerCase();
    consoleStr =
      consoleStr.length === 1 && consoleStr[0] === '0' ? str : consoleStr + str;
    element.querySelector('#console #inputs').innerHTML = `${consoleStr
      .split('')
      .join(' ')}`;
  };

  const parseConsoleStr = async (str) => {
    str = str.replaceAll('x', '*');
    const operators = /[-+*/%]/;
    const numbers = str.split(operators);
    const actions = str
      .split(/[0-9.]/i)
      .join(' ')
      .replace(' ', '')
      .trim()
      .split(' ')
      .filter((ch) => ch !== '');
    let ans = Number(numbers[0]);
    for (let i = 1, x = 0; i < numbers.length; i += 1) {
      const nextNum = Number(numbers[i]);
      let result;
      switch (actions[x]) {
        case '+':
          result = Calculator.add(ans, nextNum);
          break;
        case '-':
          result = Calculator.subtract(ans, nextNum);
          break;
        case '*':
          result = Calculator.multiply(ans, nextNum);
          break;
        case '/':
          result = Calculator.division(ans, nextNum);
          break;
        case '%':
          result = Calculator.mod(ans, nextNum);
          break;
        default:
          break;
      }
      ans = result;
      x += 1;
    }
    return ans;
  };

  const calculateAns = async () => {
    const ans = await parseConsoleStr(consoleStr.toLowerCase());
    element.querySelector('#console #output span').innerHTML = `${ans}`;
  };

  element.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.textContent === '=') {
        // pressed =
        calculateAns();
        return;
      }

      if (e.target.textContent === 'ac') {
        resetAllConsoleStr();
        return;
      }

      if (e.target.textContent === 'c') {
        resetConsoleStr();
        return;
      }

      updateConsoleStr(e.target.textContent);
    });
  });

  element
    .querySelector('#ac')
    .addEventListener('click', () => resetAllConsoleStr());

  element
    .querySelector('#del')
    .addEventListener('click', () => resetConsoleStr());
}

export default setupCalculator;
