import { useMyContext } from "../UseContext";
import "./AllPlaces.scss";
import clock from "./clock.png";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const AllPlaces = () => {
  const { traveled } = useMyContext();
  const { specialization } = useParams();
  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: t("allPlaces") },
    { key: "Palaces", label: t("palaces") },
    { key: "museums", label: t("museums") },
    // { key: "parks", label: t("parks") },
    { key: "nature", label: t("nature") },
    { key: "attractive", label: t("EntertainmentAndActiveRecreation") },
  ];

  const filteredObjects =
    selectedCategory === "all"
      ? traveled
      : traveled.filter((e) => e.special === selectedCategory);

  return (
    <>
      <div className="AllPlaces-Wrapper">
        <div className="Allplaces-Inner">
          <div className="Allplces-Title-Button">
            <div className="AllPlaces-Title">{t("allPlaces")}</div>
            <div className="AllPlaces-Buttons">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`Button ${
                    selectedCategory === cat.key ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.key)}
                >
                  <span className="Button-Word">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="Allplaces-Block">
            {filteredObjects.map((e) => (
              <div className="AllPlaces-card" key={e.id}>
                <div className="AllPlaces-Img">
                  <img src={e.img} className="card-image" />
                </div>
                <div className="card-content">
                  <div className="AllPlaces-Name">{t(e.name)}</div>
                  <ul className="AllPlaces-Menu">
                    <li className="Allplaces-Item">
                      <img src={clock} className="clock" />
                      <span className="time">{t(e.openClose)}</span>
                    </li>
                    <li className="Allplaces-Item">
                      <span className="Word">{t("Şəhər")}:</span>
                      <span className="time">{t(e.city)}</span>
                    </li>
                    <li className="Allplaces-Item">
                      <span className="Word">{t("Növ")}:</span>
                      <span className="time">{t(e.special)}</span>
                    </li>
                    <li className="Allplaces-Item">
                      <span className="Word">{t("Açılış tarixi")}:</span>
                      <span className="time">{t(e.timeBuild)}</span>
                    </li>
                    <li className="Allplaces-Item">
                      <span className="Word">{t("Ünvan")}:</span>
                      <span className="time">{t(e.openClose)}</span>
                    </li>
                  </ul>
                  <button className="AllPlaces-Button">Daha ətraflı oxuyun</button>{" "}
                  <Link to={`/desc/${e.id}`}>
                    <button className="AllPlaces-Button">Daha ətraflı oxuyun</button>
                  </Link>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
