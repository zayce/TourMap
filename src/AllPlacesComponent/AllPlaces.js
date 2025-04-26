import { useMyContext } from "../UseContext";
import "./AllPlaces.scss";
import clock from "./clock.png";

export const AllPlaces = () => {
  const { traveled } = useMyContext();
  return (
    <>
      <div className="AllPlaces-Wrapper">
        <div className="Allplaces-Inner">
          <div className="Allplces-Title-Button">
            <div className="AllPlaces-Title">Все Места</div>
            <div className="AllPlaces-Buttons">
              <button className="Button">
                <span className="Button-Word">Все</span>
              </button>
              <button className="Button">
                <span className="Button-Word">Популярные</span>
              </button>
              <button className="Button">
                <span className="Button-Word">Музей</span>
              </button>
              <button className="Button">
                <span className="Button-Word">Парки</span>
              </button>
              <button className="Button">
                <span className="Button-Word">Атракционы</span>
              </button>
            </div>
          </div>
          <div className="Allplaces-Block">
            {traveled.map((e) => (
              <div className="AllPlaces-card" key={e.id}>
                <div className="AllPlaces-Img">
                  <img src={e.img} className="card-image" />
                </div>
                <div class="card-content">
                  <div className="AllPlaces-Name">{e.name}</div>
                  <ul className="AllPlaces-Menu">
                    <li className="Allplaces-Item">
                      <img src={clock} className="clock" />
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
                    <li className="Allplaces-Item">
                      <span className="Word">Город:</span>{" "}
                      <span className="time">{e.category}</span>
                    </li>
                  </ul>
                  <button className="AllPlaces-Button">Подробнее</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
