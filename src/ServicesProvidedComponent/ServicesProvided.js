import "./ServicesProvided.scss";

import Summer from "./asestss/Summer.png";
import SpAu from "./asestss/Spring-Autumn.png";
import Winter from "./asestss/winter.png";

const servicesData = [
  {
    image: Summer,
    title: "Summer",
    description: "SummerSummerSummerSummer SummerSummerSummer",
  },
  {
    image: SpAu,
    title: "Spring-Autumn",
    description: "SpringAutumnSpringAutumn SpringAutumnSpringAutumn",
  },
  {
    image: Winter,
    title: "Winter",
    description: "WinterWinterWinterWinter WinterWinterWinter",
  },
];

export const ServicesProvided = () => {
  return (
    <div className="ServicesProvided-Wrapper">
      <div className="ServicesProvided-Inner">
        {servicesData.map((service, index) => (
          <div className="ServicesProvided-Profile" key={index}>
            <div className="ServicesProvided-img">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="ServicesProvided-Block">
              <div className="ServicesProvided-Name">{service.title}</div>
              <div className="ServicesProvided-Opis">{service.description}</div>
              <button className="ServicesProvided-button">
                <span className="ServicesProvided-word">Читать далее</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
