## Feature Description

Add basic arithmetic operations to the Node.js CLI calculator: addition, subtraction, multiplication, and division. The implementation should live in calculator.js and expose a simple CLI interface for computing expressions or performing two-operand operations.

## Use Case

Users need a lightweight command-line calculator to perform quick arithmetic without opening a GUI or web calculator. This is useful in scripts, CI logs, and for developers working in terminals.

## Proposed Solution

- Implement calculator.js that supports:
  - addition
  - subtraction
  - multiplication
  - division (with proper handling of division by zero)
- Provide a CLI entrypoint (e.g., index.js or bin/cli) that accepts operands and an operator or a simple arithmetic expression.
- Add tests and example usages in the README.

## Additional Context

- Keep the implementation minimal and dependency-free if possible.
- Ensure clear error messages for invalid input and division by zero.

Requested-by: @nanen
