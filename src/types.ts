import { ICarsProps } from "./pages/Home";

export interface IAddressProps {
  cep?: string;
}

export interface ICostumerProps {
  id?: number;
  name: string;
  address?: IAddressProps;
  birthDate?: Date;
  cpf?: string;
  car?: ICarsProps;
}
