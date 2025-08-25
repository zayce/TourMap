import clock from "../AllPlacesComponent/clock.png";
import { Link } from "react-router-dom";
import { useMyContext } from "../UseContext";
import { useParams } from "react-router-dom";

import "./CityTourComponent.scss";

export const CityTourComponent = () => {
  const { traveled } = useMyContext();
  const { category } = useParams();
  const filteredObjects = traveled.filter((e) => e.category === category);
  return (
    <>
      <div className="CityTourComponent-wrapper">
        <div className="CityTourComponent-inner">
          <div className="CityTourComponent-title">{category}</div>

          <div className="CityTourComponent">
            {filteredObjects.map((e) => (
              <div className="CityTourComponent-card" key={e.id}>
                <div className="CityTourComponent-Img">
                  <img src={e.img} className="CityTourComponent-card-image" />
                </div>
                <div className="CityTourComponent-card-content">
                  <div className="CityTourComponent-Name">{e.name}</div>
                  <ul className="CityTourComponent-Menu">
                    <li className="CityTourComponent-Item">
                      <img src={clock} className="CityTourComponent-clock" />
                      <span className="CityTourComponent-time">
                        {e.openClose}
                      </span>
                    </li>
                    <li className="CityTourComponent-Item">
                      <span className="CityTourComponent-Word">
                        Дата открытия:
                      </span>
                      <span className="CityTourComponent-time">
                        {e.timeBuild}
                      </span>
                    </li>
                    <li className="CityTourComponent-Item">
                      <span className="CityTourComponent-Word">Адрес:</span>
                      <span className="CityTourComponent-time">{e.adres}</span>
                    </li>
                    <li className="CityTourComponent-Item">
                      <span className="CityTourComponent-Word">Город:</span>
                      <span className="CityTourComponent-time">
                        {e.category}
                      </span>
                    </li>
                    <li className="CityTourComponent-Item">
                      <span className="CityTourComponent-Word">Тип:</span>
                      <span className="CityTourComponent-time">
                        {e.special}
                      </span>
                    </li>
                  </ul>
                  <Link to={`/desc/${e.id}`}>
                    <button className="AllPlaces-Button">Подробнее</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
