import axios from "axios";
import { ICarsProps } from "../pages/Home";
import { IUserData } from "../pages/Login";

export async function createCar(car: ICarsProps) {
  const createdCar = await axios.post<ICarsProps>(
    "http://localhost:3333/cars",
    car
  );

  return createdCar;
}

export async function editCar(car: ICarsProps, id: any) {
  const editedCar = await axios.put(`http://localhost:3333/cars/${id}`, car);

  return editedCar;
}

export async function login(user: IUserData) {
  const userExists = await axios.post(`http://localhost:3333/auth/login`, user);

  return userExists;
}

export async function register(user: IUserData) {
  const userCreated = await axios.post(
    `http://localhost:3333/auth/register`,
    user
  );

  return userCreated;
}
