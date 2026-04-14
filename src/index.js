#!/usr/bin/env node
// Simple CLI for the calculator in calculator.js
// Usage examples:
//   node src/index.js add 2 3
//   node src/index.js + 2 3
//   node src/index.js "2+3"

const calc = require('./calculator');

function printHelp() {
  console.log('Usage:\n  node src/index.js <operator> <a> <b>\n  or\n  node src/index.js "<a><op><b>"');
  console.log('\nOperators (names or symbols): add (+), sub (-), mul (x, *), div (/)');
}

function parseExpression(expr) {
  // match simple expressions like 2+3 or 4.5*6
  const m = expr.match(/^\s*([+-]?\d+(?:\.\d+)?)\s*([+\-*/xX])\s*([+-]?\d+(?:\.\d+)?)\s*$/);
  if (!m) return null;
  return { a: parseFloat(m[1]), op: m[2], b: parseFloat(m[3]) };
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    printHelp();
    process.exit(1);
  }

  let a, b, op;

  if (args.length === 1) {
    // try expression form
    const parsed = parseExpression(args[0]);
    if (!parsed) {
      console.error('Invalid expression.');
      printHelp();
      process.exit(1);
    }
    a = parsed.a; b = parsed.b; op = parsed.op;
  } else if (args.length === 3) {
    // operator a b or a operator b
    // determine which position the operator is in
    if (!isNaN(Number(args[0])) && isNaN(Number(args[1]))) {
      // form: a op b
      a = Number(args[0]); op = args[1]; b = Number(args[2]);
    } else {
      // form: op a b
      op = args[0]; a = Number(args[1]); b = Number(args[2]);
    }
  } else {
    console.error('Invalid arguments.');
    printHelp();
    process.exit(1);
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Operands must be numbers.');
    process.exit(1);
  }

  try {
    const result = calc.compute(op, a, b);
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
