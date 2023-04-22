export function calculator(number1:number, number2:number, operator:string) {
    if (operator!="+"&&operator!="-"&&operator!="*"&&operator!="/"){
        throw new RangeError("Cần nhập toán tử + , - ,*, /");
    }
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }
    return result;
}