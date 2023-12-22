import { InputUndefinedCheck as InputCheck } from './helper.js'

/**
 * Returns the sum of two numbers.
 *
 * @param {number} firstNumber The first number to add.
 * @param {number} secondNumber The second number to add.
 * @returns {number} The sum of the two numbers.
 */
export function sum (firstNumber, secondNumber) {
  if (InputCheck(firstNumber, secondNumber)) {
    return null;
  }
  return firstNumber + secondNumber
}

/**
 * Returns the difference of two numbers.
 *
 * @param {number} firstNumber The first number to subtract.
 * @param {number} secondNumber The second number to subtract.
 * @returns {number} The difference of the two numbers.
 */
export function subtract(firstNumber, secondNumber) {
  if (InputCheck(firstNumber, secondNumber)) {
    return null;
  }
  return firstNumber - secondNumber
}

/**
 * Returns the quotient of two numbers.
 *
 * @param {number} firstNumber The first number to divide.
 * @param {number} secondNumber The second number to divide.
 * @returns {number} The quotient of the two numbers.
 */
export function divide (firstNumber, secondNumber) {
  if (secondNumber === 0 | InputCheck(firstNumber, secondNumber)) {
    return null;
  }
  return firstNumber/secondNumber
}

/**
 * Returns the product of two numbers.
 *
 * @param {number} firstNumber The first number to multiply.
 * @param {number} secondNumber The second number to multiply.
 * @returns {number} The product of the two numbers.
 */
export function multiply (firstNumber, secondNumber) {
  if (InputCheck(firstNumber, secondNumber)) {
    return null;
  }
  return firstNumber*secondNumber
}

/**
 * Returns the mean of an array of numbers.
 *
 * @param {number[]} numbers The array of numbers to average.
 * @returns {number} The mean of the array of numbers.
 */
export function mean (numbers) {
  if (InputCheck(numbers) | numbers.length === 0) {
    return null;
  }
  let addition  = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      return null
    }
    addition += numbers[i];
  }
  return addition / numbers.length;
}

