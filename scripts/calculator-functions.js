/*
elements needed
    calc-button-grid for event delegation
    grid-row
    calc key
        -rv
        -number
        -operator
        - equals
    Calculator functions,
        Take input
        key events based on type
        numbers -> pressed show up on screen, logged in calculator holdings
        operations -> push displayed number into calculator-holdings
        removal - if text = del, remove one interger from right to left
        submit( = sign) => two number, one operation -> return the result based on combination
                            1 number -> return number 

*/

//These variables hold inputs
let calcHoldings = [];
let inputHoldings = "";
// listen for key events
let calcOutput = document.querySelector(
  "body > main > section.calc-output > p"
);
let calcGrid = document.querySelector(".calc-button-grid");
let reset = () => {
  inputHoldings = "";
  calcHoldings = [];
  return (calcOutput.innerText = "0");
};

// Operations

let addition = (a, b) => {
  return a + b;
};
let subtraction = (a, b) => {
  return a - b;
};
let multiplication = (a, b) => {
  return a * b;
};
let division = (a, b) => {
  return a / b;
};
let evaluateExpression = expr => {
  console.log("Evaluating Expression....");
  console.log(expr);
  // pass these into operation function
  let operands = expr
    .filter(e => {
      return parseFloat(e);
    })
    .map(e => Number(e));
  console.log(operands);
  // keep operator on hand for switch
  let operation = String(expr.filter(e => isNaN(e)));
  console.log(operation);
  if (expr.length < 2) {
    console.log(expr[0]);
    return expr[0];
  } else if (expr.length === 3) {
    //evaluate the expression's non number
    //expr is an array => filter and select the first item
    switch (operation) {
      case "+":
        console.log("Adding Numbers");
        return (calcOutput.innerText = addition(operands[0], operands[1]));

        break;
      case "-":
        break;
      case "*":
        break;
      case "/":
        break;

      default:
        break;
    }
  }
};

reset();
// Will need to refactor this code
calcGrid.addEventListener("click", function(e) {
  // ignore grid-row
  if (e.target.getAttribute("class").includes("calc-key")) {
    let pressedKey = e.target.dataset.keytype;
    switch (pressedKey) {
      case "number":
        console.log(e.target);
        inputHoldings += e.target.innerText;
        console.log(inputHoldings);
        calcOutput.innerText = inputHoldings;
        break;
      case "operator":
        console.log("I'm an operator");
        calcHoldings.push(inputHoldings);
        calcHoldings.push(e.target.innerText);
        inputHoldings = "";

        // If input holdings is empty, push number with operator
        break;
      case "equals":
        console.log("I'm an Equals Button");
        calcHoldings.push(inputHoldings);
        calcOutput.innerText = evaluateExpression(calcHoldings);
        break;
      case "reset":
        console.log("I'm a Reset Button");
        // resetButton
        // empty input and Output holdings
        reset();

        break;
      case "delete":
        console.log("I'm a Delete Button");
        // remove the rightmost element from the inputHoldins
        break;

      default:
        break;
    }
  }
  // determine key on case by case basis(Switch)

  //Numbers get added to inputHoldings
  //Operator push inputHoldings and selected operator(if there already is an operator)

  /*
        switch case
            add to calcHoldings
        */
});

//number key
//reset key
