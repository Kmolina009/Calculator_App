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
let outputHolding = "";
// listen for key events
let calcOutput = document.querySelector(
  "body > main > section.calc-output > p"
);
let calcGrid = document.querySelector(".calc-button-grid");
// ******************************** RESET FUNCTIONS *********************************************
let resetCalcHoldings = () => {
  return (calcHoldings = []);
};
let resetinputHoldings = () => {
  return (inputHoldings = "");
};
let totalReset = () => {
  inputHoldings = "";
  resetCalcHoldings();
  return (calcOutput.innerText = "0");
};

// Operations
let operandCheck = (arr) => {
  let regexTest = /[x+/-]/i;
  if (regexTest.test(arr.join(""))) {
    return arr[0];
  }
};
let addition = (a, b = a) => {
  return a + b;
};
let subtraction = (a, b = a) => {
  return a - b;
};
let multiplication = (a, b = a) => {
  return a * b;
};
let division = (a, b = a) => {
  return a / b;
};
// Listens for Equal Sign Button's Click event
let evaluateExpression = (expr) => {
  operandCheck(expr);
  console.log(expr);
  // pass these into operation function
  let operands = expr
    .filter((e) => {
      return parseFloat(e);
    })
    .map((e) => Number(e));
  // keep operator on hand for switch
  let operation = String(expr.filter((e) => isNaN(e)));
  console.log(operation);
  if (expr.length < 2) {
    console.log(expr[0]);
    return expr[0];
  } else if (expr.length >= 3) {
    //evaluate the expression's non number
    //expr is an array => filter and select the first item
    switch (operation) {
      case "+":
        resetCalcHoldings();
        resetinputHoldings();
        return (calcOutput.innerText = addition(...operands));
        break;
      case "-":
        resetCalcHoldings();
        resetinputHoldings();
        return (calcOutput.innerText = subtraction(...operands)) ;
        break;
      case "x":
        resetCalcHoldings();
        resetinputHoldings();
        return (calcOutput.innerText = multiplication(...operands));
        break;
      case "/":
        resetCalcHoldings();
        resetinputHoldings();
        return (calcOutput.innerText = division(...operands));
        break;

      default:
        //   Resets if input is invalid
        totalReset();
        break;
    }
  }
};

totalReset();
// Will need to refactor this code
calcGrid.addEventListener("click", function (e) {
  console.log(inputHoldings);
  console.log(calcHoldings);
  // ignore grid-row
  if (e.target.getAttribute("class").includes("calc-key")) {
    //   Update console of expression
    console.log(`Calculator's holdings : ${calcHoldings}`);
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
        if (inputHoldings == "" || undefined) {
          inputHoldings = 0;
        }
        calcHoldings.push(inputHoldings);
        // There might be a need for an updateOutput function to handle display of calculated data
        outputHolding = [evaluateExpression(calcHoldings)];
        console.log(calcHoldings);
        calcOutput.innerText = outputHolding;
        break;
      case "reset":
        console.log("I'm a Reset Button");
        // empty input and Output holdings
        totalReset();

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
});

//number key
//reset key
