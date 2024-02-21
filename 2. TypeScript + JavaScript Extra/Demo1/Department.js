"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = exports.Department = /** @class */ (function () {
    function Department(name) {
        Department.count += 1;
        this.id = Department.count;
        this.name = name;
    }
    Department.count = 0;
    return Department;
}());
