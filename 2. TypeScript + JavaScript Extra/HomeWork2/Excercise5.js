//Question 1:
var multiply = function (a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
};
console.log("Question 1:");
console.log(multiply(5));
console.log(multiply(5, 3));
//Question 2:
var multiply2 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 1;
    numbers.forEach(function (number) { return (result = result * number); });
    return result;
};
console.log("-----------------------------------");
console.log("Question 2:");
console.log(multiply2(5));
console.log(multiply2(5, 3));
console.log(multiply2(5, 3, 2));
//Question 3:
var printInformation = function (name, email) {
    if (email != undefined) {
        console.log("T\u00F4i t\u00EAn l\u00E0 ".concat(name, ", email c\u1EE7a t\u00F4i l\u00E0 ").concat(email));
    }
    else
        console.log("T\u00F4i t\u00EAn l\u00E0 ".concat(name, ", t\u00F4i ch\u01B0a c\u00F3 email!"));
};
console.log("------------------------------------");
console.log("Question 3:");
printInformation("Nam");
printInformation("Nam", "namnanaan@gmail.com");
