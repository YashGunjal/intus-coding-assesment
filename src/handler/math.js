import { sum, subtract, multiply, divide, mean } from '../lib/math.js'
/**
 * Math is an API endpoint that allows you to return a result based off inputs.
 * This MUST support all available math functions defined in the "/lib/math.js".
 *
 * @param req
 */
export function math (req) {
  const { a, b, operation } = req.body

  // Switch statement to determine which math operation to perform
  switch (operation) {
    case 'sum':
      return {
        result: sum(a, b)
      }
    case 'subtract':
      return {
        result: subtract(a, b)
      }
    case 'multiply':
      return {
        result: multiply(a, b)
      }
    case 'divide':
      return {
        result: divide(a, b)
      }
    case 'mean':
      return {
        result: mean(a)
      }
    default:
      return {
        result: null,
        message: `Invalid operation: ${operation}`
      }
  }
}
