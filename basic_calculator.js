let firstValue = parseFloat(prompt(), 10)
let sign = prompt();
let secondValue = parseFloat(prompt(), 10);
let result;

if (sign == '+'){
    result = firstValue + secondValue;
    window.alert(result)
}
else if (sign == '-'){
    result = firstValue - secondValue;
    window.alert(result)
}
else if (sign == '*'){
    result = firstValue * secondValue;
    window.alert(result)
}
else if (sign == '/'){
    result = firstValue / secondValue;
    window.alert(result)
}
