"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(id, name, brand, year, maxVelocity, acceleration) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.year = year;
        this.maxVelocity = maxVelocity;
        this.acceleration = acceleration;
    }
    return Car;
}());
exports.Car = Car;
