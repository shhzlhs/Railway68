//Cách 1:
function sum(a, b) {
    return a + b;
}
//Cách 2: Tạo biến tham chiếu
var v_sum = function (a, b) {
    return a + b;
};
//Cách 3: dùng arrow
var c_sum = function (a, b) {
    return a + b;
};
//nếu thân chỉ có 1 dòng:
var o_sum = function (a, b) { return a + b; };
console.log(c_sum(10, 20));
console.log(sum(1, 2));
console.log(v_sum(10, 2));
console.log(o_sum(1, 1));
