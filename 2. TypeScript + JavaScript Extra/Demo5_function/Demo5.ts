//Cách 1:
function sum(a, b) {
  return a + b;
}
//Cách 2: Tạo biến tham chiếu
let v_sum = function (a, b) {
  return a + b;
};
//Cách 3: dùng arrow
let c_sum = (a, b) => {
  return a + b;
};
//nếu thân chỉ có 1 dòng:
let o_sum = (a, b) => a + b;
console.log(c_sum(10, 20));
console.log(sum(1, 2));
console.log(v_sum(10, 2));
console.log(o_sum(1, 1));
