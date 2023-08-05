var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// //Question 1:
// let mang = [2, 4, 6, 8, 10];
// let mang1 = [...mang, 5, 7, 9];
// let mang2 = [...mang1];
// console.log(mang2);
//Question 3:
var cold = ["autumn", "winter"];
var warm = ["spring", "summer"];
var sesons = __spreadArray(__spreadArray([], cold, true), warm, true);
console.log(sesons);
