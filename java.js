//Number and operator variables
const equals = document.querySelector('.equal');
equals.addEventListener('click', operate);

const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => operator.addEventListener('click', assignOperator));


const numbers = document.querySelectorAll('.number');
numbers.forEach((number)=>number.addEventListener('click',assignNum1));

let num1 = ''; 
let num2 = '';

//Display functions
const display =document.querySelector('.display');
display.textContent = ''
display.style.color ='black';

// operate function

function assignNum1(e){
    console.log(`assignNum1 ran, ${e.target.textContent}`);
    display.textContent += e.target.textContent
    return num1 += e.target.textContent
};

function assignNum2(e){
   console.log(`assignNum2 ran, ${e.target.textContent}`);
   display.textContent += e.target.textContent
   return num2 += e.target.textContent;
}

function assignOperator(e){
    numbers.forEach((number)=>number.removeEventListener('click',assignNum1));
    numbers.forEach((number)=>number.addEventListener('click',assignNum2));
    display.textContent += e.target.textContent
    console.log(`assignOperator ran, ${e.target.textContent}`);
    return operator = e.target.textContent;
}

function operate (){
    console.log(`operate ran`);
    num1 = parseInt(num1);
    num2=parseInt(num2);
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