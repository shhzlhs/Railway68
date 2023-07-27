import { Gender } from "./Gender";
export class CanBo {
  private name: String;
  private age: number;
  private gender: Gender;
  private address: String;
  public static canBos: CanBo[] = [];

  constructor(name: String, age: number, gender: Gender, address: String) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }

  /**
   * Getter name
   * @return {String}
   */
  public getName(): String {
    return this.name;
  }

  /**
   * Getter age
   * @return {number}
   */
  public getAge(): number {
    return this.age;
  }

  /**
   * Getter gender
   * @return {Gender}
   */
  public getGender(): Gender {
    return this.gender;
  }

  /**
   * Getter address
   * @return {String}
   */
  public getAddress(): String {
    return this.address;
  }

  /**
   * Setter name
   * @param {String} value
   */
  public setName(value: String) {
    this.name = value;
  }

  /**
   * Setter age
   * @param {number} value
   */
  public setAge(value: number) {
    this.age = value;
  }

  /**
   * Setter gender
   * @param {Gender} value
   */
  public setGender(value: Gender) {
    this.gender = value;
  }

  /**
   * Setter address
   * @param {String} value
   */
  public setAddress(value: String) {
    this.address = value;
  }
  public toString() {
    console.log(`Cán Bộ ${this.name}:`);
    console.log(`Tuổi: ${this.age}`);
    console.log(`Giới tính: ${this.gender}`);
    console.log(`Địa chỉ: ${this.address}`);
  }
}
