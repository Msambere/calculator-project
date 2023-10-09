const display =document.querySelector('.display');
const displayLine1 = document.querySelector('.display1')
const displayLine2 = document.querySelector('.display2')

const equals = document.querySelector('#equals');
equals.addEventListener('click', operate);

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearCalc)

const backspace =document.querySelector('.backspace');
backspace.addEventListener('click', erase1)

const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => operator.addEventListener('click', assignOperator));

const numbers = document.querySelectorAll('.number');
numbers.forEach((number)=>number.addEventListener('click',assignNum1));

let num1 = ''; 
let num2 = '';

// operate function

function assignNum1(e){
    displayLine2.textContent += e.target.textContent;
    return num1 += e.target.textContent;
};

function assignNum2(e){
    displayLine2.textContent += e.target.textContent;
   return  num2 += e.target.textContent;
};

function assignOperator(e){
    numbers.forEach((number)=>number.removeEventListener('click',assignNum1));
    numbers.forEach((number)=>number.addEventListener('click',assignNum2));
    operate();
    displayLine1.textContent = num1;
    displayLine1.textContent += e.target.textContent;
    displayLine2.textContent=''
    return operator = e.target.textContent;
}

function operate (){
    if (!num2){
        num2=''
        return;
    };
    displayLine1.textContent = num1+operator+num2+'='
    num1 = parseInt(num1);
    num2=parseInt(num2);
    if (operator === '+'){
        solution =add(num1,num2);
    } else if (operator === '-'){
        solution = subtract(num1,num2);
    } else if (operator === '*'){
        solution = multiply(num1,num2);
    }else if (operator === '/'){
        solution = divide(num1,num2);   
    };
    num1= solution;
    num2 = '';
    return displayLine2.textContent = solution;
};

function clearCalc(){
    num1 ='';
    num2='';
    numbers.forEach((number)=>number.addEventListener('click',assignNum1));
    numbers.forEach((number)=>number.removeEventListener('click',assignNum2));
    displayLine1.textContent = '';
    displayLine2.textContent='';
    return ;
}

function erase1 (){
    return displayLine2.textContent = displayLine2.textContent.toString().slice(0,-1);
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
        return Math.round((a/b)*10000)/10000;
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

 /*

 TDL:
  --Divide by 0 displays error message and sets num2 to zero and then after 1 sec displays num1
  --Make calculator pretty
  --add decimal button: only 1 decimal per number
  --fix erase1 function
  -- udpate display to show: ln1: num1 operator num2 equals  ln2: solution
  
  */