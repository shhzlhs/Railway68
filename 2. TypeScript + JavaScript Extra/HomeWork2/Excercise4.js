//Question 1:
// B1: Ko có keyword function:
var c = function (a) {
    return a + 100;
};
//B2: Ko có dấu {} và keyword return trong function body:
var d = function (a) { return a + 100; };
// B3: Không có dấu ngoặc ở argument
// Question 2:
var qa = function (a, b) { return a + b + 100; };
var qb = function (a, b, chuck) {
    if (chuck === void 0) { chuck = 42; }
    return a + b + chuck;
};
var bob = function (a) { return a + 100; };
console.log(qa(1, 2));
console.log(qb(1, 3));
console.log(bob(2));
