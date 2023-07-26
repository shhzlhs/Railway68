"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    // Contructor:
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    //   Getter:
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    //   Setter:
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAdress = function (address) {
        this.address = address;
    };
    // Phương thức:
    Person.prototype.goVTI = function () {
        console.log("go to VTI");
    };
    Person.prototype.toString = function () {
        console.log("ID: ".concat(this.id));
        console.log("Name: ".concat(this.name));
        console.log("Address: ".concat(this.address));
    };
    return Person;
}());
exports.Person = Person;
