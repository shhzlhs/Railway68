import { Car } from "./Ex3";

async function getCarsFromAPI() {
  try {
    const response = await fetch(
      "https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/cars"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

getCarsFromAPI().then((res) => {
  let cars: Array<Car> = [];
  res.forEach((r) => {
    cars.push(
      new Car(r.id, r.name, r.brand, r.year, r.max_velocity, r.acceleration)
    );
  });
  return cars;
});
