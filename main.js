function calculator (input1, input2, operator){
let result = 0
if(operator=='+'){
    result = input1 + input2
}else if(operator=='-'){
    result = input1 - input2
}else if (operator =='*'){
    result = input1 * input2
}else if (operator == '/'){
    result = input1 / input2
}else{
    result = 'not valid'
}
return result
}
console.log(calculator (10, 2, '+'))