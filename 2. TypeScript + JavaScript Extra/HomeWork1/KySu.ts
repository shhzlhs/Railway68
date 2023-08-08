import { CanBo } from "./CanBo";
import { Gender } from "./Gender";
export class KySu extends CanBo {
  private specialized: string;

  constructor(
    name: string,
    age: number,
    gender: Gender,
    address: string,
    specialized: string
  ) {
    super(name, age, gender, address);
    this.specialized = specialized;
  }

  /**
   * Getter specialized
   * @return {string}
   */
  public getSpecialized(): string {
    return this.specialized;
  }

  /**
   * Setter specialized
   * @param {string} value
   */
  public setSpecialized(value: string) {
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
