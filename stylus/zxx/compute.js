function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function compute(a, b, fn) {
  return fn(a, b);
}

// const d = divide(10, 2);
console.log(compute(10, 2, divide));