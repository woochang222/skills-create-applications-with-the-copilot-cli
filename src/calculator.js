// calculator.js
// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division

/**
 * Basic calculator functions for two operands.
 * Keep implementation minimal and dependency-free.
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

/**
 * Compute supports operator names and symbols:
 * names: add, sub, mul, div
 * symbols: +, -, *, /
 */
function compute(op, a, b) {
  switch (op) {
    case 'add':
    case '+':
      return add(a, b);
    case 'sub':
    case '-':
      return subtract(a, b);
    case 'mul':
    case 'x':
    case 'X':
    case '*':
      return multiply(a, b);
    case 'div':
    case '/':
      return divide(a, b);
    default:
      throw new Error('Unsupported operator: ' + op);
  }
}

module.exports = { add, subtract, multiply, divide, compute };
