// gameCalculator.js
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;
const OPERATIONS = ['+', '-', '*'];

// Генерация случайного числа
const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Выбор случайной математической операции
const getRandomOperation = () => {
  const operationIndex = Math.floor(Math.random() * OPERATIONS.length);
  return OPERATIONS[operationIndex];
};

// Вычисление результата выражения
const calculateExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

// Начальное сообщение игры
export const startGame = () => 'What is the result of the expression?';

// Раунд игры
export const playRound = () => {
  const num1 = generateNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = generateNumber(MIN_NUMBER, MAX_NUMBER);
  const operation = getRandomOperation();
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculateExpression(num1, num2, operation).toString();

  return [question, correctAnswer];
};

export default { startGame, playRound };
