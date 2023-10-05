function add() {
    const numbers = Array.from(arguments);
    const sum =numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);
    return sum;
  };

function subtract() {
    const numbers = Array.from(arguments);
    const difference =numbers.reduce((accumulator, currentValue) => accumulator - currentValue);
    return difference;
  };
  
function multiply() {
    const product =arguments[0].reduce((accumulator, currentValue) => accumulator*currentValue);
    return product;
  };

function divide(){
    const quotient = arguments[0].reduce((accumulator, currentValue) => accumulator/currentValue);
    return quotient;
};
  
function power() {
    const numbers = Array.from(arguments);
    const results =numbers.reduce((accumulator, currentValue) => accumulator**currentValue);
    return results;
      
  };
  
function factorial(num) {
    const numbers = [];
    for(i=num; i>0; i--) {
      numbers.push(i);
    };
    const results =numbers.reduce((accumulator, currentValue) => accumulator*currentValue,1);
    return results;
  };