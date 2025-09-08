import clock from "../AllPlacesComponent/clock.png";
import { Link } from "react-router-dom";
import { useMyContext } from "../UseContext";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./CityTourComponent.scss";

export const CityTourComponent = () => {
  const { traveled } = useMyContext();
  const { category } = useParams();
  const { t } = useTranslation();

  const filteredObjects = traveled.filter((e) => e.category === category);

  return (
    <div className="CityTourComponent-wrapper">
      <div className="CityTourComponent-inner">
        <div className="CityTourComponent-title">{category}</div>

        <div className="CityTourComponent">
          {filteredObjects.map((e) => (
            <div className="CityTourComponent-card" key={e.id}>
              <div className="CityTourComponent-Img">
                <img src={e.img} className="CityTourComponent-card-image" />
              </div>
              <Link to={`/desc/${e.id}`}>
                <div className="CityTourComponent-card-content">
                  <div className="CityTourComponent-Name">{t(e.name)}</div>
                  <ul className="CityTourComponent-Menu">
                    <li className="CityTourComponent-Item">
                      <img src={clock} className="CityTourComponent-clock" />
                      <span className="CityTourComponent-time">
                        {t(e.openClose)}
                      </span>
                    </li>
                    <li className="CityTourComponent-Item">
                      <span className="CityTourComponent-Word">
                        Дата открытия:
                      </span>
                      <span className="CityTourComponent-time">
                        {t(e.timeBuild)}
                      </span>
                    </li>
                    <li className="CityTourComponent-Item">
                      <span className="CityTourComponent-Word">Адрес:</span>
                      <span className="CityTourComponent-time">
                        {t(e.adres)}
                      </span>
                    </li>
                    <li className="CityTourComponent-Item">
                      <span className="CityTourComponent-Word">Город:</span>
                      <span className="CityTourComponent-time">
                        {t(e.city)}
                      </span>
                    </li>
                    <li className="CityTourComponent-Item">
                      <span className="CityTourComponent-Word">Тип:</span>
                      <span className="CityTourComponent-time">
                        {t(e.specialTranslate)}
                      </span>
                    </li>
                  </ul>
                  <Link to={`/desc/${e.id}`}>
                    <button className="AllPlaces-Button">Подробнее</button>
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
