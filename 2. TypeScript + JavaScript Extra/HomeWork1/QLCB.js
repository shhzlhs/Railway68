"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QLCB = void 0;
var CanBo_1 = require("./CanBo");
var CongNhan_1 = require("./CongNhan");
var Gender_1 = require("./Gender");
var readlineSync = require("readline-sync");
var KySu_1 = require("./KySu");
var NhanVien_1 = require("./NhanVien");
var QLCB = /** @class */ (function () {
    function QLCB() {
    }
    QLCB.menu = function () {
        console.log("1. Thêm mới cán bộ;");
        console.log("2. Tìm kiếm theo họ tên;");
        console.log("3. Hiển thị danh sách cán bộ;");
        console.log("4. Xóa cán bộ;");
        console.log("5. Thoát;");
        var userInput = readlineSync.question("Please choose: ");
        var choice = parseInt(userInput);
        switch (choice) {
            case 1:
                this.createCanBo();
                break;
            case 2:
                this.findByName();
                break;
            case 3:
                this.getAllCanBos();
        }
    };
    QLCB.createCanBo = function () {
        console.log("1.Thêm mới Công nhân;");
        console.log("2.Thêm mới Kỹ sư;");
        console.log("3.Thêm mới Nhân viên;");
        var userInput = readlineSync.question("Please choose: ");
        var choice = parseInt(userInput);
        switch (choice) {
            case 1:
                this.createCongNhan();
                break;
            case 2:
                this.createKySu();
                break;
            case 3:
                this.createNhanVien();
                break;
            case 4:
                this.deleteByName();
                break;
            case 5:
                return;
        }
    };
    QLCB.createCongNhan = function () {
        var name = readlineSync.question("CongNhan's name: ");
        var ageInput = readlineSync.question("CongNhan's age: ");
        var age = parseInt(ageInput);
        var gender = this.chooseGender();
        var address = readlineSync.question("CongNhan's address: ");
        var levelInput = readlineSync.question("CongNhan's level: ");
        var level = parseInt(levelInput);
        var congNhan = new CongNhan_1.CongNhan(name, age, gender, address, level);
        CanBo_1.CanBo.canBos.push(congNhan);
        console.log("Tạo thành công Công nhân mới:");
        congNhan.toString();
    };
    QLCB.createKySu = function () {
        var name = readlineSync.question("KySu's name: ");
        var ageInput = readlineSync.question("KySu's age: ");
        var age = parseInt(ageInput);
        var gender = this.chooseGender();
        var address = readlineSync.question("KySu's address: ");
        var specialized = readlineSync.question("KySu's specialized: ");
        var kySu = new KySu_1.KySu(name, age, gender, address, specialized);
        CanBo_1.CanBo.canBos.push(kySu);
        console.log("Tạo thành công Kỹ sư mới:");
        kySu.toString();
    };
    QLCB.createNhanVien = function () {
        var name = readlineSync.question("NhanVien's name: ");
        var ageInput = readlineSync.question("NhanVien's age: ");
        var age = parseInt(ageInput);
        var gender = this.chooseGender();
        var address = readlineSync.question("NhanVien's address: ");
        var job = readlineSync.question("NhanVien's job: ");
        var nhanVien = new NhanVien_1.NhanVien(name, age, gender, address, job);
        CanBo_1.CanBo.canBos.push(nhanVien);
        console.log("Tạo thành công Nhân viên mới:");
        nhanVien.toString();
    };
    QLCB.findByName = function () {
        console.log("Tên Cán bộ cần tìm?");
        var name = readlineSync.question("CanBo's name: ");
        var canBoWantoFinds = [];
        CanBo_1.CanBo.canBos.forEach(function (element) {
            if (element.getName() == name) {
                canBoWantoFinds.push(element);
            }
        });
        if (canBoWantoFinds.length > 0) {
            console.log("Cán bộ bạn cần tìm: ");
            canBoWantoFinds.forEach(function (element) {
                element.toString();
            });
        }
        else {
            console.log("Không có Cán bộ bạn cần tìm");
        }
    };
    QLCB.getAllCanBos = function () {
        console.log("Danh s\u00E1ch C\u00E1n b\u1ED9:");
        CanBo_1.CanBo.canBos.forEach(function (element) {
            element.toString();
            console.log("---");
        });
    };
    QLCB.deleteByName = function () {
        var length = CanBo_1.CanBo.canBos.length;
        console.log("Tên Cán bộ cần xóa?");
        var name = readlineSync.question("CanBo's name: ");
        CanBo_1.CanBo.canBos = CanBo_1.CanBo.canBos.filter(function (element) { return element.getName() !== name; });
        if (length > CanBo_1.CanBo.canBos.length) {
            console.log("\u0110\u00E3 x\u00F3a C\u00E1n b\u1ED9 ".concat(name));
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y C\u00E1n b\u1ED9 c\u00F3 t\u00EAn ".concat(name));
        }
    };
    QLCB.chooseGender = function () {
        console.log("Giới tính:");
        console.log("1.Nam");
        console.log("2. Nữ");
        console.log("3. Khác");
        var userInput = readlineSync.question("Please choose: ");
        var choice = parseInt(userInput);
        switch (choice) {
            case 1:
                return Gender_1.Gender.NAM;
                break;
            case 2:
                return Gender_1.Gender.NU;
                break;
            case 3:
                return Gender_1.Gender.KHAC;
                break;
        }
        return Gender_1.Gender.KHAC;
    };
    return QLCB;
}());
exports.QLCB = QLCB;
