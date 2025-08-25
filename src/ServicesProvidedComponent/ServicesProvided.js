import { Link } from "react-router-dom";
import "./ServicesProvided.scss";
import Summer from "./asestss/Summer.png";
import SpAu from "./asestss/Spring-Autumn.png";
import Winter from "./asestss/winter.png";
import { useMyContext } from "../UseContext";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

const servicesData = [
  {
    id: 1,
    image: Summer,
    title: "summer", // Используем ключ для перевода
    description: "summerDescription", // Используем ключ для перевода
    postId: 1,
  },
  {
    id: 2,
    image: SpAu,
    title: "springAutumn", // Используем ключ для перевода
    description: "springAutumnDescription", // Используем ключ для перевода
    postId: 2,
  },
  {
    id: 3,
    image: Winter,
    title: "winter", // Используем ключ для перевода
    description: "winterDescription", // Используем ключ для перевода
    postId: 3,
  },
];

export const ServicesProvided = () => {
  const { t } = useTranslation(); // Получаем функцию t для перевода
  const { addToDesc } = useMyContext();

  return (
    <div className="ServicesProvided-Wrapper">
      <div className="ServicesProvided-Inner">
        {servicesData.map((service) => (
          <div className="ServicesProvided-Profile" key={service.id}>
            <Link
              to={`/Season/${service.postId}`}
              onClick={() => addToDesc(service)}
            >
              <div className="ServicesProvided-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="ServicesProvided-Block">
                <div className="ServicesProvided-Name">{t(service.title)}</div>
                <div className="ServicesProvided-Opis">
                  {t(service.description)}
                </div>
                <button className="ServicesProvided-button">
                  <span className="ServicesProvided-word">{t("readMore")}</span>
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
