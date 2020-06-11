import readlineSync from 'readline-sync';

const generateNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const playRound = (question, computedAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (computedAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${computedAnswer}".`);
  return false;
};

const isEven = (num) => (num % 2 === 0);

const generateGameData = () => {
  const question = generateNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const getQuestion = (data) => data[0];

const getAnswer = (data) => data[1];

const playGame = (gameData, gameDescription) => {
  const userName = readlineSync.question('May I have your name? ');
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`Hi, ${userName}!`);
  console.log(gameDescription);
  for (let i = 1; i <= roundsCount; i += 1) {
    const data = gameData();
    const question = getQuestion(data);
    const answer = getAnswer(data);
    const check = playRound(question, answer);
    if (!check) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
  playGame(generateGameData, gameDescription);
};
