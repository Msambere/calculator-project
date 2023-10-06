//Number and operator variables
//const numbers = document.querySelectorAll('.number');
//numbers.forEach((number)=>document.addEventListener('click',assignNum1));
const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => document.addEventListener('click', assignOperator));
const equals = document.querySelector('.equal');
equals.addEventListener('click', operate);
let num1 = 3;
let num2 = 4;
//Display functions
const display =document.querySelector('.display');
//const problem = `${num1} ${operator} ${num2}`
display.textContent = '';
display.style.color ='black';

// operate function

function assignNum1(e){
    console.log(e.target.textContent)
    return num1+= e.target.textContent;
};

function assignNum2(e){
    console.log(e.target.textContent)
    return num2+= e.target.textContent;
}

function assignOperator(e){
    //numbers.forEach((number)=>document.removeEventListener('click',assignNum1));
    //numbers.forEach((number)=>document.addEventListener('click',assignNum2));
    return operator = e.target.textContent;
}

function operate (){
    if (operator === '+'){
        return display.textContent= add(num1,num2);
    } else if (operator === '-'){
        return display.textContent= subtract(num1,num2);
    } else if (operator === '*'){
        return display.textContent= multiply(num1,num2);
    }else if (operator === '/'){
        return display.textContent= divide(num1,num2);
    };
};


// Basic Math functions
function add(a,b) {
    return a+b;
  };

function subtract(a,b) {
    return a-b;
  };
  
function multiply(a,b) {
    return a*b;
  };

function divide(a,b){
    if (b==0){
        return "No No No don't divide by 0!";
    }else {
    return (a/b).toFixed(4);
    };
};
  
function power(a,b) {
    return a**b
  };
  
function factorial(num) {
    const numbers = [];
    for(i=num; i>0; i--) {
      numbers.push(i);
    };
    const results =numbers.reduce((accumulator, currentValue) => accumulator*currentValue,1);
    return results;
  };