import { useMyContext } from "../UseContext";
import "./AllPlaces.scss";
import clock from "./clock.png";

export const AllPlaces = () => {
  const { traveled } = useMyContext();
  return (
    <>
      <div className="AllPlaces-Wrapper">
        <div className="Allplaces-Inner">
          {traveled.map((e) => (
            <div className="AllPlaces-card" key={e.id}>
              <div className="AllPlaces-Img">
                <img src={e.img} className="card-image" />
              </div>
              <div class="card-content">
                <div className="AllPlaces-Name">{e.name}</div>
                <ul className="AllPlaces-Menu">
                  <li className="Allplaces-Item">
                    <img
                      src={clock}
                      className="clock"
                    />
                    <span className="time">{e.openClose}</span>
                  </li>
                  <li className="Allplaces-Item">
                    <span className="Word">Дата открытия:</span>{" "}
                    <span className="time">{e.timeBuild}</span>
                  </li>
                  <li className="Allplaces-Item">
                    <span className="Word">Адрес:</span>{" "}
                    <span className="time">{e.adres}</span>
                  </li>
                </ul>
                <button className="AllPlaces-Button">Подробнее</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
