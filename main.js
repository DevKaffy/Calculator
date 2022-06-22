const operator = prompt('Enter operator (either +, -, *, /):');
const number1 =  parseFloat(prompt('Enter first number:'));
const number2 = parseFloat(prompt('Enter second number:'));
let result = 0
if(operator=='+'){
    result = number1 + number2;
}else if(operator=='-'){
    result = number1 - number2;
}else if (operator =='*'){
    result = number1 * number2;
}else if (operator == '/'){
    result = number1 / number2;
}else{
    result = 'not valid'
}
console.log('Result is ' + result)