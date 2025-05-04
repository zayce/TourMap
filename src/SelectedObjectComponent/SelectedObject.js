import { useMyContext } from "../UseContext";
import { useParams } from "react-router-dom";
import "../SelectedObjectComponent/SelectedObject.scss";
import clock from "../AllPlacesComponent/clock.png";

export const SelectedObject = () => {
  const { traveled } = useMyContext();
  const { specialization } = useParams();
  const filteredObjects = traveled.filter(
    (e) => e.specialization === specialization
  );

  return (
    <>
      <div className="Selected-Object-wrapper">
        <div className="Selected-Object-inner">
          <div className="Selected-Object-title">{specialization}</div>

          <div className="Selected-Object">
            {filteredObjects.map((e) => (
              <div className="Selected-Object-card" key={e.id}>
                <div className="Selected-Object-Img">
                  <img src={e.img} className="Selected-Object-card-image" />
                </div>
                <div className="Selected-Object-card-content">
                  <div className="Selected-Object-Name">{e.name}</div>
                  <ul className="Selected-Object-Menu">
                    <li className="Selected-Object-Item">
                      <img src={clock} className="Selected-Object-clock" />
                      <span className="Selected-Object-time">
                        {e.openClose}
                      </span>
                    </li>
                    <li className="Selected-Object-Item">
                      <span className="Selected-Object-Word">
                        Дата открытия:
                      </span>
                      <span className="Selected-Object-time">
                        {e.timeBuild}
                      </span>
                    </li>
                    <li className="Selected-Object-Item">
                      <span className="Selected-Object-Word">Адрес:</span>
                      <span className="Selected-Object-time">{e.adres}</span>
                    </li>
                    <li className="Selected-Object-Item">
                      <span className="Selected-Object-Word">Город:</span>
                      <span className="Selected-Object-time">{e.category}</span>
                    </li>
                    <li className="Selected-Object-Item">
                      <span className="Selected-Object-Word">Тип:</span>
                      <span className="Selected-Object-time">{e.special}</span>
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
