import readlineSync from 'readline-sync';

export const generateNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const playRound = (question, computedAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (computedAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${computedAnswer}".`);
  return false;
};
const getQuestion = (data) => data[0];

const getAnswer = (data) => data[1];

export const playGame = (gameData, gameDescription) => {
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
