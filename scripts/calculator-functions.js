/*
elements needed
    calc-button-grid
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

//hold inputs
let calcHoldings = [];

// listen for key events
let calcOutput =document.querySelector("body > main > section.calc-output > p");
let calcGrid = document.querySelector(".calc-button-grid");

calcOutput.innerText ="0"
