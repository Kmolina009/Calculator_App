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
// Listen's for Equal Sign Button's Click event
let evaluateExpression = (expr) => {
  operandCheck(expr);
  // pass these into operation function
  let operands = expr
    .filter((e) => {
      return parseFloat(e);
    })
    .map((e) => Number(e));
  // keep operator on hand for switch
  let operation = String(expr.filter((e) => isNaN(e)));
  if (expr.length < 2) {
    return expr[0];
  } else if (expr.length >= 3) {
    //evaluate the expression's non number
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
calcGrid.addEventListener("click", function (e) {
  if (e.target.getAttribute("class").includes("calc-key")) {
    let pressedKey = e.target.dataset.keytype;
    switch (pressedKey) {
      case "number":
        inputHoldings += e.target.innerText;
        calcOutput.innerText = inputHoldings;
        break;
      case "operator":
        calcHoldings.push(inputHoldings);
        calcHoldings.push(e.target.innerText);
        inputHoldings = "";
        break;
      case "equals":
        if (inputHoldings == "" || undefined) {
          inputHoldings = 0;
        }
        calcHoldings.push(inputHoldings);
        outputHolding = [evaluateExpression(calcHoldings)];
        calcOutput.innerText = outputHolding;
        break;
      case "reset":
        totalReset();

        break;
      case "delete":
        inputHoldings = inputHoldings.slice(0,inputHoldings.length-1);
        calcOutput.innerText= inputHoldings;
        if(inputHoldings.length===0||inputHoldings===""){
          resetinputHoldings()
          calcOutput.innerText = 0;
        }
        break;
      default:
        break;
    }
  }
});
