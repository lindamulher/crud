import axios from "axios";
import { ICarsProps } from "../pages/Home";

export async function createCar(car: ICarsProps) {
  const createdCar = await axios.post<ICarsProps>(
    "http://localhost:3333/cars",
    car
  );

  return createdCar;
}
