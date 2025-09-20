import { useMyContext } from "../UseContext";
import { useParams } from "react-router-dom";
import "../SelectedObjectComponent/SelectedObject.scss";
import clock from "../AllPlacesComponent/clock.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SelectedObject = () => {
  const { traveled } = useMyContext();
  const { specialization } = useParams();
  const filteredObjects = traveled.filter(
    (e) => e.specialization === specialization
  );
  const { t } = useTranslation();
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
                  <div className="Selected-Object-Name"> {t(e.name)}</div>
                  <ul className="Selected-Object-Menu">
                    <li className="Selected-Object-Item">
                      <img src={clock} className="Selected-Object-clock" />
                      <span className="Selected-Object-time">
                        {t(e.openClose)}
                      </span>
                    </li>
                    <li className="Selected-Object-Item">
                      <span className="Selected-Object-Word">
                         Açılış tarixi:
                      </span>
                      <span className="Selected-Object-time">
                        {t(e.timeBuild)}
                      </span>
                    </li>
                    <li className="Selected-Object-Item">
                      <span className="Selected-Object-Word">Ünvan:</span>
                      <span className="Selected-Object-time">{t(e.adres)}</span>
                    </li>
                    <li className="Selected-Object-Item">
                      <span className="Selected-Object-Word">Şəhər:</span>
                      <span className="Selected-Object-time">{t(e.city)}</span>
                    </li>
                    <li className="Selected-Object-Item">
                      <span className="Selected-Object-Word">Növ:</span>
                      <span className="Selected-Object-time">
                        {t(e.special)}
                      </span>
                    </li>
                  </ul>
                  <Link to={`/desc/${e.id}`}>
                    <button className="AllPlaces-Button">Daha ətraflı oxuyun</button>
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
