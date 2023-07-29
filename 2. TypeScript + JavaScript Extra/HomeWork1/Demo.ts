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
var congNhan3 = new CongNhan("Nguyen Vat Va", 24, Gender.NU, "Biệt Thự X", 4);
var nhanVien2 = new NhanVien(
  "Ly Thi Buon",
  21,
  Gender.NU,
  "Xóm Ồn Ào",
  "Lễ Tân"
);
var nhanVien3 = new NhanVien(
  "Ly Thi Buon",
  22,
  Gender.KHAC,
  "Ngõ Tự Do",
  "Bảo vệ"
);
CanBo.canBos.push(
  congNhan1,
  congNhan2,
  kySu1,
  nhanVien1,
  congNhan3,
  nhanVien2,
  nhanVien3
);
QLCB.menu();
