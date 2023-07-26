import { Person } from "./Person";
var person1 = new Person(1, "Họ Thị Tên", "Lang Thang");
// person1.id = 1;
// person1.name = "Họ Thị Tên";
// person1.address = "Lang thang";

var person2 = new Person(2, "Họ Văn Tên", "Khách sạn");
// person2.id = 2;
// person2.name = "Họ Và Tên";
// person2.address = "Khách sạn";

person1.goVTI();
person2.goVTI();

console.log("-------------------------------------------------");

person1.toString();
person2.toString();
