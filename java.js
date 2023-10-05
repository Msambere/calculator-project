//Number and operator variables
const num1 = 3;
const num2 = 5;
const operator = add();


// operate function

function operate (){
    operator(num1,num2);
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
    return a/b;
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