/*
    check output div's p tag
*/ 
let calcOutputString = document.querySelector(".calc-output > p");
function outputLengthCheck(e){
    // console.log(`${e.target.className} has been clicked`);
    if (e.target.className==="calc-key") {
        console.log("CALC KEEEEEEEEEEEEEEEEEY")
        calcOutputString.innerText.length
}
}

document.querySelector(".calc-button-grid")
.addEventListener('click', outputLengthCheck)