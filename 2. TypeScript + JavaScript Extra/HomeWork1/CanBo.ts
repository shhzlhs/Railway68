import { Gender } from "./Gender";
export class CanBo {
  private name: string;
  private age: number;
  private gender: Gender;
  private address: string;
  public static canBos: CanBo[] = [];

  constructor(name: string, age: number, gender: Gender, address: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }

  /**
   * Getter name
   * @return {string}
   */
  public getName(): string {
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
   * @return {string}
   */
  public getAddress(): string {
    return this.address;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public setName(value: string) {
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
   * @param {string} value
   */
  public setAddress(value: string) {
    this.address = value;
  }
  public toString() {
    console.log(`Cán Bộ ${this.name}:`);
    console.log(`Tuổi: ${this.age}`);
    console.log(`Giới tính: ${this.gender}`);
    console.log(`Địa chỉ: ${this.address}`);
  }
}
