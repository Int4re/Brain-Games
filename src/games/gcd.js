import generateNum from '../index.js';
import playGame from '../utils.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateGameData = () => {
  const a = generateNum(0, 100);
  const b = generateNum(0, 100);
  const question = `${a} ${b}`;
  const result = gcd(a, b);
  return [question, result.toString()];
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  playGame(generateGameData, gameDescription);
};
