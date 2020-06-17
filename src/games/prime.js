import generateNum from '../index.js';
import playGame from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const question = generateNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(generateGameData, gameDescription);
};
