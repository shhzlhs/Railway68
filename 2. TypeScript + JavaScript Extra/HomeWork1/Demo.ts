import { CanBo } from "./CanBo";
import { CongNhan } from "./CongNhan";
import { Gender } from "./Gender";
import { KySu } from "./KySu";
import { NhanVien } from "./NhanVien";
import * as readlineSync from "readline-sync";
import { QLCB } from "./QLCB";
var congNhan1 = new CongNhan(
  "Nguyen Vat Va",
  30,
  Gender.NAM,
  "Hẻm Làm Thuê",
  1
);
var congNhan2 = new CongNhan("Tran Cham Chi", 18, Gender.NAM, "Xóm Cần Cù", 7);
var kySu1 = new KySu(
  "Le Trinh Do",
  25,
  Gender.KHAC,
  "Đại lộ Lighting",
  "Cầu Cống"
);
var nhanVien1 = new NhanVien(
  "Do Cu Ly",
  29,
  Gender.NU,
  "Hẻm Làm Thuê",
  "Lao Công"
);
var nhanVien2 = new NhanVien(
  "Ly Thi Buon",
  21,
  Gender.NU,
  "Xóm Ồn Ào",
  "Lễ Tân"
);
CanBo.canBos.push(congNhan1);
CanBo.canBos.push(congNhan2);
CanBo.canBos.push(kySu1);
CanBo.canBos.push(nhanVien1);
CanBo.canBos.push(nhanVien2);
console.log(CanBo.canBos);
QLCB.menu();
