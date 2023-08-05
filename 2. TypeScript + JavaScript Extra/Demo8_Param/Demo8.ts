// Defaul Param:
function sayHello(name: string = "Bad Boy", age: number = 18) {
  console.log(`My name is ${name}, I'm ${age} years old`);
}

sayHello();
//Rest Param:
function sayGoodbye(...names) {
  console.log(`Bye...${names}`);
}
sayGoodbye("Tên", "Họ");

//Optional Param:
function xxx(firstName: string, lastName: string, middleName?: string) {
  if (middleName != undefined) {
    console.log(`Name: ${firstName} ${middleName} ${lastName}`);
  } else console.log(`Name: ${firstName} ${lastName}`);
}
xxx("Họ", "Tên");
xxx("Họ", "Tên", "Văn");
