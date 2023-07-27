"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanBo = void 0;
var CanBo = exports.CanBo = /** @class */ (function () {
    function CanBo(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    /**
     * Getter name
     * @return {String}
     */
    CanBo.prototype.getName = function () {
        return this.name;
    };
    /**
     * Getter age
     * @return {number}
     */
    CanBo.prototype.getAge = function () {
        return this.age;
    };
    /**
     * Getter gender
     * @return {Gender}
     */
    CanBo.prototype.getGender = function () {
        return this.gender;
    };
    /**
     * Getter address
     * @return {String}
     */
    CanBo.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * Setter name
     * @param {String} value
     */
    CanBo.prototype.setName = function (value) {
        this.name = value;
    };
    /**
     * Setter age
     * @param {number} value
     */
    CanBo.prototype.setAge = function (value) {
        this.age = value;
    };
    /**
     * Setter gender
     * @param {Gender} value
     */
    CanBo.prototype.setGender = function (value) {
        this.gender = value;
    };
    /**
     * Setter address
     * @param {String} value
     */
    CanBo.prototype.setAddress = function (value) {
        this.address = value;
    };
    CanBo.prototype.toString = function () {
        console.log("C\u00E1n B\u1ED9 ".concat(this.name, ":"));
        console.log("Tu\u1ED5i: ".concat(this.age));
        console.log("Gi\u1EDBi t\u00EDnh: ".concat(this.gender));
        console.log("\u0110\u1ECBa ch\u1EC9: ".concat(this.address));
    };
    CanBo.canBos = [];
    return CanBo;
}());
