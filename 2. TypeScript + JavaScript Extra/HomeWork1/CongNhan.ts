import { CanBo } from "./CanBo";
import { Gender } from "./Gender";
export class CongNhan extends CanBo {
  private level: number;

  constructor(
    name: string,
    age: number,
    gender: Gender,
    address: string,
    level: number
  ) {
    super(name, age, gender, address);
    this.level = level;
  }

  /**
   * Getter level
   * @return {number}
   */
  public getLevel(): number {
    return this.level;
  }

  /**
   * Setter level
   * @param {number} value
   */
  public setLevel(value: number) {
    this.level = value;
  }
  public toString() {
    console.log(`Công nhân ${super.getName()}:`);
    console.log(`Tuổi: ${super.getAge()}`);
    console.log(`Giới tính: ${super.getGender()}`);
    console.log(`Địa chỉ: ${super.getAddress()}`);
    console.log(`Bậc: ${this.level}`);
  }
}
