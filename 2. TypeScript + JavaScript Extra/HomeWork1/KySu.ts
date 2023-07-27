import { CanBo } from "./CanBo";
import { Gender } from "./Gender";
export class KySu extends CanBo {
  private specialized: String;

  constructor(
    name: String,
    age: number,
    gender: Gender,
    address: String,
    specialized: String
  ) {
    super(name, age, gender, address);
    this.specialized = specialized;
  }

  /**
   * Getter specialized
   * @return {String}
   */
  public getSpecialized(): String {
    return this.specialized;
  }

  /**
   * Setter specialized
   * @param {String} value
   */
  public setSpecialized(value: String) {
    this.specialized = value;
  }
  public toString() {
    console.log(`Công nhân ${super.getName()}:`);
    console.log(`Tuổi: ${super.getAge()}`);
    console.log(`Giới tính: ${super.getGender()}`);
    console.log(`Địa chỉ: ${super.getAddress()}`);
    console.log(`Ngành đào tạo: ${this.specialized}`);
  }
}
