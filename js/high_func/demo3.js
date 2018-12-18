function formalGreeting() {
  console.log('How are you?');
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if (type === 'formal') {
    greetFormal();
  } else if (type === 'casual') {
    greetCasual();
  }
}

greet('casual', formalGreeting, casualGreeting);