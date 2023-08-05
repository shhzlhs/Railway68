//Question 1:
let multiply = (a, b = 1) => a * b;
console.log("Question 1:");

console.log(multiply(5));
console.log(multiply(5, 3));
//Question 2:
let multiply2 = (...numbers: number[]) => {
  let result = 1;
  numbers.forEach((number) => (result = result * number));
  return result;
};

console.log("-----------------------------------");
console.log("Question 2:");

console.log(multiply2(5));
console.log(multiply2(5, 3));
console.log(multiply2(5, 3, 2));
//Question 3:

let printInformation = (name: string, email?: string) => {
  if (email != undefined) {
    console.log(`Tôi tên là ${name}, email của tôi là ${email}`);
  } else console.log(`Tôi tên là ${name}, tôi chưa có email!`);
};
console.log("------------------------------------");
console.log("Question 3:");
printInformation("Nam");
printInformation("Nam", "namnanaan@gmail.com");
