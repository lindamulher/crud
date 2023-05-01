import React from "react";
import axios from "axios";
import CarCard from "../../components/CarCard";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export interface ICarsProps {
  brand: string;
  color: string;
  price: number;
  model: string;
  id?: number;
  year: number;
  imgUrl?: string;
}
const Home = () => {
  const navigate = useNavigate();
  const [cars, setCars] = React.useState<Array<ICarsProps> | []>([]);
  React.useEffect(() => {
    const getAllCars = async () => {
      const response = await axios.get("http://localhost:3333/cars");
      setCars(response.data);
    };
    getAllCars();
  }, []);

  return (
    <div className="p-4 w-full">
      <div className="flex justify-end">
        <button
          onClick={() => navigate("new-car")}
          className="flex mb-4 items-center justify-center rounded px-4 py-2 bg-blue-500 text-white font-semibold gap-2"
        >
          <AiOutlinePlusCircle /> Novo
        </button>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {cars?.map((item) => {
          return (
            <CarCard
              brand={item.brand}
              color={item.color}
              price={item.price}
              model={item.model}
              year={item.year}
              key={item.id}
              imgUrl={item.imgUrl}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
