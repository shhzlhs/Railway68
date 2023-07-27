import { CanBo } from "./CanBo";
import { CongNhan } from "./CongNhan";
import { Gender } from "./Gender";
import * as readlineSync from "readline-sync";
import { KySu } from "./KySu";
import { NhanVien } from "./NhanVien";
export class QLCB {
  public static menu() {
    console.log("1. Thêm mới cán bộ;");
    console.log("2. Tìm kiếm theo họ tên;");
    console.log("3. Hiển thị danh sách cán bộ;");
    console.log("4. Xóa cán bộ;");
    console.log("5. Thoát;");
    const userInput: string = readlineSync.question("Please choose: ");
    const choice: number = parseInt(userInput);
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
  }

  public static createCanBo() {
    console.log("1.Thêm mới Công nhân;");
    console.log("2.Thêm mới Kỹ sư;");
    console.log("3.Thêm mới Nhân viên;");
    const userInput: string = readlineSync.question("Please choose: ");
    const choice: number = parseInt(userInput);
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
  }

  public static createCongNhan() {
    const name: string = readlineSync.question("CongNhan's name: ");
    const ageInput: string = readlineSync.question("CongNhan's age: ");
    const age: number = parseInt(ageInput);
    const gender: Gender = this.chooseGender();
    const address: string = readlineSync.question("CongNhan's address: ");
    const levelInput: string = readlineSync.question("CongNhan's level: ");
    const level: number = parseInt(levelInput);
    var congNhan = new CongNhan(name, age, gender, address, level);
    CanBo.canBos.push(congNhan);
    console.log("Tạo thành công Công nhân mới:");
    congNhan.toString();
  }

  public static createKySu() {
    const name: string = readlineSync.question("KySu's name: ");
    const ageInput: string = readlineSync.question("KySu's age: ");
    const age: number = parseInt(ageInput);
    const gender: Gender = this.chooseGender();
    const address: string = readlineSync.question("KySu's address: ");
    const specialized: string = readlineSync.question("KySu's specialized: ");
    var kySu = new KySu(name, age, gender, address, specialized);
    CanBo.canBos.push(kySu);
    console.log("Tạo thành công Kỹ sư mới:");
    kySu.toString();
  }

  public static createNhanVien() {
    const name: string = readlineSync.question("NhanVien's name: ");
    const ageInput: string = readlineSync.question("NhanVien's age: ");
    const age: number = parseInt(ageInput);
    const gender: Gender = this.chooseGender();
    const address: string = readlineSync.question("NhanVien's address: ");
    const job: string = readlineSync.question("NhanVien's job: ");
    var nhanVien = new NhanVien(name, age, gender, address, job);
    CanBo.canBos.push(nhanVien);
    console.log("Tạo thành công Nhân viên mới:");
    nhanVien.toString();
  }

  public static findByName() {
    console.log("Tên Cán bộ cần tìm?");
    const name: string = readlineSync.question("CanBo's name: ");
    const canBoWantoFinds: CanBo[] = [];
    CanBo.canBos.forEach((element) => {
      if (element.getName() == name) {
        canBoWantoFinds.push(element);
      }
    });
    if (canBoWantoFinds.length > 0) {
      console.log("Cán bộ bạn cần tìm: ");
      canBoWantoFinds.forEach((element) => {
        element.toString();
      });
    } else {
      console.log("Không có Cán bộ bạn cần tìm");
    }
  }

  public static getAllCanBos() {
    console.log(`Danh sách Cán bộ:`);
    CanBo.canBos.forEach((element) => {
      element.toString();
      console.log("---");
    });
  }

  public static deleteByName() {
    const length: number = CanBo.canBos.length;
    console.log("Tên Cán bộ cần xóa?");
    const name: string = readlineSync.question("CanBo's name: ");
    CanBo.canBos = CanBo.canBos.filter((element) => element.getName() !== name);
    if (length > CanBo.canBos.length) {
      console.log(`Đã xóa Cán bộ ${name}`);
    } else {
      console.log(`Không tìm thấy Cán bộ có tên ${name}`);
    }
  }

  public static chooseGender(): Gender {
    console.log("Giới tính:");
    console.log("1.Nam");
    console.log("2. Nữ");
    console.log("3. Khác");
    const userInput: string = readlineSync.question("Please choose: ");
    const choice: number = parseInt(userInput);
    switch (choice) {
      case 1:
        return Gender.NAM;
        break;
      case 2:
        return Gender.NU;
        break;
      case 3:
        return Gender.KHAC;
        break;
    }
    return Gender.KHAC;
  }
}
