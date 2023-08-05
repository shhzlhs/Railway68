//Chương trình máy tính đơn giản:
//Cộng:
function sum(a, b) {
    return a + b;
}
//Trừ:
function minus(a, b) {
    return a - b;
}
//Nhân:
function multi(a, b) {
    return a * b;
}
//Chia:
function split(a, b) {
    return a / b;
}
// HOF:
function calculate(a, b, function_param) {
    return function_param(a, b);
}
//Tổng:
console.log(calculate(1, 2, sum));
