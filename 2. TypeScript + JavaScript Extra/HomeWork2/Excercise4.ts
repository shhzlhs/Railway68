//Question 1:
// B1: Ko có keyword function:
let c = (a) => {
  return a + 100;
};
//B2: Ko có dấu {} và keyword return trong function body:
let d = (a) => a + 100;
// B3: Không có dấu ngoặc ở argument

// Question 2:
let qa = (a, b) => a + b + 100;
let qb = (a, b, chuck = 42) => a + b + chuck;
let bob = (a) => a + 100;

console.log(qa(1, 2));
console.log(qb(1, 3));
console.log(bob(2));
