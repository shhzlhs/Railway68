export class Department {
  private id: number;
  private name: string;
  public static count: number = 0;

  constructor(name: string) {
    Department.count += 1;
    this.id = Department.count;
    this.name = name;
  }
}
