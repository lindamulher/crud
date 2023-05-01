import "./styles.scss";
import { ICarsProps } from "../../pages/Home";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";

function CarCard({ brand, model, year, color, price, imgUrl, id }: ICarsProps) {
  async function handleDelete(id: number) {
    const response = confirm(`deseja deletar o ${model}?`);
    if (response) {
      await axios.delete(`http://localhost:3333/cars/${id}`);
      window.location.reload();
    } else {
      return null;
    }
  }

  return (
    <div className="card">
      <img
        src={
          imgUrl ??
          "https://s2.glbimg.com/LsSXuXOxsTVBvlz2ASrs0JjBAAE=/0x0:6400x4239/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/M/6/MLTQtHTYCjeJ8JQ0xSCw/dsc-8295.jpg"
        }
        alt=""
      />
      <div className="card__content">
        <h3>
          {brand} {model}
        </h3>
        <div className="footer">
          <h3>R$ {price.toFixed(2).replace(".", ",")}</h3>
          <div className="flex items-center justify-between">
            <h4 className="year">{year}</h4>
            <div className="flex items-center gap-3">
              <div onClick={() => handleDelete(id!)}>
                <BsFillTrashFill />
              </div>
              <div>
                <FiEdit2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
