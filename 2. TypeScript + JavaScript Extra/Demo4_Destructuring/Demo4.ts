//Đối tượng:
let student = {
  id: 1,
  name: "Họ Và Tên",
  address: "Hà Nội",
};

// let aiDi = student.id;
// let nem = student.name;
// let adoret = student.address;

// console.log(aiDi);
// console.log(nem);
// console.log(adoret);
let { id: aiDi, name: nem, address: adoret } = student;
// let { id, name, address } = student;

//Mảng:
let list = [1, 2, 7, 3, 4, 5];
let [a, b, c, d, e, f] = list;
let [i, , h] = list;
console.log(`a: ${a}, h: ${h}`);

//Spread Dàn ra, trải ra...

//thay vì viết:
// let student1 = {
//   id: 1,
//   name: "Họ Và Tên",
//   address: "Hà Nội",
//   class: "1 A",
// };
// thì:
let student1 = {
  ...student,
  class: "1A",
};
console.log(student1);

// Spread mảng:
let list1 = [...list, 10, 11];
console.log(list1);
