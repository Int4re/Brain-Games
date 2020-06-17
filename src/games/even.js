import generateNum from '../index.js';
import playGame from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const generateGameData = () => {
  const question = generateNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
  playGame(generateGameData, gameDescription);
};
