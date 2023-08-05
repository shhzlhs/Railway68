// Defaul Param:
function sayHello(name, age) {
    if (name === void 0) { name = "Bad Boy"; }
    if (age === void 0) { age = 18; }
    console.log("My name is ".concat(name, ", I'm ").concat(age, " years old"));
}
sayHello();
//Rest Param:
function sayGoodbye() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log("Bye...".concat(names));
}
sayGoodbye("Tên", "Họ");
//Optional Param:
function xxx(firstName, lastName, middleName) {
    if (middleName != undefined) {
        console.log("Name: ".concat(firstName, " ").concat(middleName, " ").concat(lastName));
    }
    else
        console.log("Name: ".concat(firstName, "  ").concat(lastName));
}
xxx("Họ", "Tên");
xxx("Họ", "Tên", "Văn");
