var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Đối tượng:
var student = {
    id: 1,
    name: "Họ Và Tên",
    address: "Hà Nội",
};
// let aiDi = student.id;
// let nem = student.name;
// let adoret = student.address;
// console.log(aiDi);
// console.log(nem);
// console.log(adoret);
var aiDi = student.id, nem = student.name, adoret = student.address;
// let { id, name, address } = student;
//Mảng:
var list = [1, 2, 7, 3, 4, 5];
var a = list[0], b = list[1], c = list[2], d = list[3], e = list[4], f = list[5];
var i = list[0], h = list[2];
console.log("a: ".concat(a, ", h: ").concat(h));
//Spread Dàn ra, trải ra...
//thay vì viết:
// let student1 = {
//   id: 1,
//   name: "Họ Và Tên",
//   address: "Hà Nội",
//   class: "1 A",
// };
// thì:
var student1 = __assign(__assign({}, student), { class: "1A" });
console.log(student1);
// Spread mảng:
var list1 = __spreadArray(__spreadArray([], list, true), [10, 11], false);
console.log(list1);
