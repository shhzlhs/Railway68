import { CanBo } from "./CanBo";
import { Gender } from "./Gender";
export class NhanVien extends CanBo {
  private job: string;

  constructor(
    name: string,
    age: number,
    gender: Gender,
    address: string,
    job: string
  ) {
    super(name, age, gender, address);
    this.job = job;
  }

  /**
   * Getter job
   * @return {string}
   */
  public getJob(): string {
    return this.job;
  }

  /**
   * Setter job
   * @param {string} value
   */
  public setJob(value: string) {
    this.job = value;
  }
  public toString() {
    console.log(`Công nhân ${super.getName()}:`);
    console.log(`Tuổi: ${super.getAge()}`);
    console.log(`Giới tính: ${super.getGender()}`);
    console.log(`Địa chỉ: ${super.getAddress()}`);
    console.log(`Công việc: ${this.job}`);
  }
}
