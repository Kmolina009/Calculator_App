/*
This script is meant to change the styling of a 
float element if the number of characters in the 
.calc-output element is more than 15 chars long.
*/
let calcOutputString = document.querySelector(".calc-output > p");
function outputLengthCheck(e) {
  // console.log(`${e.target.className} has been clicked`);
  if (e.target.className === "calc-key") {
    console.log("CALC KEEEEEEEEEEEEEEEEEY");
    calcOutputString.innerText.length;
  }
}

document
  .querySelector(".calc-button-grid")
  .addEventListener("click", outputLengthCheck);
