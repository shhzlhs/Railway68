export class Person {
  // Thuộc tính:
  private id: number;
  private name: String;
  private address: String;

  // Contructor:
  constructor(id: number, name: String, address: String) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
  //   Getter:
  public getId(): number {
    return this.id;
  }
  public getName(): String {
    return this.name;
  }
  public getAddress(): String {
    return this.address;
  }
  //   Setter:
  public setId(id: number) {
    this.id = id;
  }
  public setName(name: String) {
    this.name = name;
  }
  public setAdress(address: String) {
    this.address = address;
  }

  // Phương thức:
  goVTI(): void {
    console.log("go to VTI");
  }
  toString() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Address: ${this.address}`);
  }
}
