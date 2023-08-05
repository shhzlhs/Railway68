//Chương trình máy tính đơn giản:
//Cộng:
function sum(a: number, b: number) {
  return a + b;
}
//Trừ:
function minus(a: number, b: number) {
  return a - b;
}
//Nhân:
function multi(a: number, b: number) {
  return a * b;
}
//Chia:
function split(a: number, b: number) {
  return a / b;
}

// HOF:
function calculate(a: number, b: number, function_param) {
  return function_param(a, b);
}

//Tổng:
console.log(calculate(1, 2, sum));
