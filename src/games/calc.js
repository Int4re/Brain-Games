import generateNum from '../index.js';
import playGame from '../utils.js';

const getSign = () => {
  const operations = '+-*';
  return operations[generateNum(0, 2)];
};

const calculate = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

const generateGameData = () => {
  const sign = getSign();
  const a = generateNum(0, 100);
  const b = generateNum(0, 100);
  const result = calculate(a, b, sign);
  const question = `${a} ${sign} ${b}`;
  return [question, result.toString()];
};

export default () => {
  const gameDescription = 'What is the result of the expression?';
  playGame(generateGameData, gameDescription);
};
