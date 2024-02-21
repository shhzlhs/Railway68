export class Car {
  private id: number;
  private name: string;
  private brand: string;
  private year: Date;
  private maxVelocity: number;
  private acceleration: number;
  constructor(
    id: number,
    name: string,
    brand: string,
    year: Date,
    maxVelocity: number,
    acceleration: number
  ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.year = year;
    this.maxVelocity = maxVelocity;
    this.acceleration = acceleration;
  }
}
