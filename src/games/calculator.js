import generateNumber from '../utils.js';
// gameCalculator.js
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;
const OPERATIONS = ['+', '-', '*'];

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
      throw new Error(`Unknown operation in func calculateExpression: '${operation}' !`);
  }
};

// Начальное сообщение игры
export const description = 'What is the result of the expression?';

// Раунд игры
export const generateRound = () => {
  const num1 = generateNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = generateNumber(MIN_NUMBER, MAX_NUMBER);
  const operation = OPERATIONS[generateNumber(0, OPERATIONS.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculateExpression(num1, num2, operation).toString();

  return [question, correctAnswer];
};

export default { description, generateRound };
