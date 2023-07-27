"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVien = void 0;
var CanBo_1 = require("./CanBo");
var NhanVien = /** @class */ (function (_super) {
    __extends(NhanVien, _super);
    function NhanVien(name, age, gender, address, job) {
        var _this = _super.call(this, name, age, gender, address) || this;
        _this.job = job;
        return _this;
    }
    /**
     * Getter job
     * @return {string}
     */
    NhanVien.prototype.getJob = function () {
        return this.job;
    };
    /**
     * Setter job
     * @param {string} value
     */
    NhanVien.prototype.setJob = function (value) {
        this.job = value;
    };
    NhanVien.prototype.toString = function () {
        console.log("C\u00F4ng nh\u00E2n ".concat(_super.prototype.getName.call(this), ":"));
        console.log("Tu\u1ED5i: ".concat(_super.prototype.getAge.call(this)));
        console.log("Gi\u1EDBi t\u00EDnh: ".concat(_super.prototype.getGender.call(this)));
        console.log("\u0110\u1ECBa ch\u1EC9: ".concat(_super.prototype.getAddress.call(this)));
        console.log("C\u00F4ng vi\u1EC7c: ".concat(this.job));
    };
    return NhanVien;
}(CanBo_1.CanBo));
exports.NhanVien = NhanVien;
