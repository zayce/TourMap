import { Link } from "react-router-dom"; // Убедись, что импортирован Link
import "./ServicesProvided.scss";

import Summer from "./asestss/Summer.png";
import SpAu from "./asestss/Spring-Autumn.png";
import Winter from "./asestss/winter.png";
import { useMyContext } from "../UseContext";

const servicesData = [
  {
    id: 1,
    image: Summer,
    title: "Summer",
    description: "Летние путешествия",
    postId: 1,
  },
  {
    id: 2,
    image: SpAu,
    title: "Spring-Autumn",
    description: "Весна и осень",
    postId: 2,
  },
  {
    id: 3,
    image: Winter,
    title: "Winter",
    description: "Зимние путешествия",
    postId: 3,
  },
];

export const ServicesProvided = () => {
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
                <div className="ServicesProvided-Name">{service.title}</div>
                <div className="ServicesProvided-Opis">
                  {service.description}
                </div>
                <button className="ServicesProvided-button">
                  <span className="ServicesProvided-word">Читать далее</span>
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
