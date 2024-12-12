// import "./QuestionsComponent.scss";

// export const Questions = () => {
//   return (
//     <>
//       <div className="Question-Components">
//         <div className="Question-Blok">
//           <div className="Question-Element">
//             <span className="Question"> Что включено в стоимость тура?</span>
//             <span className="Simvol">^</span>
//           </div>
//           <div className="Question-answer">
//             В стоимость тура обычно включено: транспорт (авиаперелет,
//             трансферы), проживание, питание (в зависимости от типа тура),
//             экскурсии, страховка и услуги гида.
//           </div>
//         </div>
//         <div className="Question-Blok">
//           <div className="Question-Element">
//             <span className="Question">
//               Какова продолжительность тура и есть ли гибкость в датах?
//             </span>
//             <span className="Simvol">^</span>
//           </div>
//           <div className="Question-answer">
//             Продолжительность тура зависит от типа маршрута и программы, обычно
//             от 3 до 14 дней. Гибкость в датах может быть, но зависит от
//             конкретного тура и условий туроператора.
//           </div>
//         </div>
//         <div className="Question-Blok">
//           <div className="Question-Element">
//             <span className="Question">
//               Какие ограничения существуют для путешествующих с животными?
//             </span>
//             <span className="Simvol">^</span>
//           </div>
//           <div className="Question-answer">
//             Ограничения для путешествующих с животными: требования к документам
//             и прививкам, ограничения по перевозке в транспорте, выбор отелей,
//             доступ к определенным местам и ограничения по размеру или породе.
//           </div>
//         </div>
//         <div className="Question-Blok">
//           <div className="Question-Element">
//             <span className="Question">
//               Какова доступность транспорта на месте?
//             </span>
//             <span className="Simvol">^</span>
//           </div>
//           <div className="Question-answer">
//             Доступность транспорта на месте зависит от направления и региона.
//             Обычно доступны такси, автобусы, аренда автомобилей, велосипеды и
//             местные поезда. В туристических местах также часто есть трансферы и
//             услуги каршеринга.
//           </div>
//         </div>
//         <div className="Question-Blok">
//           <div className="Question-Element">
//             <span className="Question">
//               Какова политика по отмене и возврату денежных средств?
//             </span>
//             <span className="Simvol">^</span>
//           </div>
//           <div className="Question-answer">
//             Политика отмены зависит от туроператора: возможны частичные возвраты
//             при отмене за несколько недель, штрафы при поздней отмене,
//             невозвратные расходы (например, на билеты). Условия уточняются в
//             договоре.
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import { useState } from "react";
import "./QuestionsComponent.scss";

export const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const ActiveQuestion = [
    {
      question: "Что включено в стоимость тура?",
      answer:
        "В стоимость тура обычно включено: транспорт (авиаперелет, трансферы), проживание, питание (в зависимости от типа тура), экскурсии, страховка и услуги гида.",
    },
    {
      question: "Какова продолжительность тура и есть ли гибкость в датах?",
      answer:
        "Продолжительность тура зависит от типа маршрута и программы, обычно от 3 до 14 дней. Гибкость в датах может быть, но зависит от конкретного тура и условий туроператора.",
    },
    {
      question: "Какие ограничения существуют для путешествующих с животными?",
      answer:
        "Ограничения для путешествующих с животными: требования к документам и прививкам, ограничения по перевозке в транспорте, выбор отелей, доступ к определенным местам и ограничения по размеру или породе.",
    },
    {
      question: "Какова доступность транспорта на месте?",
      answer:
        "Доступность транспорта на месте зависит от направления и региона. Обычно доступны такси, автобусы, аренда автомобилей, велосипеды и местные поезда. В туристических местах также часто есть трансферы и услуги каршеринга.",
    },
    {
      question: "Какова политика по отмене и возврату денежных средств?",
      answer:
        "Политика отмены зависит от туроператора: возможны частичные возвраты при отмене за несколько недель, штрафы при поздней отмене, невозвратные расходы (например, на билеты). Условия уточняются в договоре.",
    },
  ];

  return (
    <div className="Question-Components">
      {ActiveQuestion.map((item, index) => (
        <div className="Question-Blok" key={index}>
          <div
            className="Question-Element"
            onClick={() => handleToggleAnswer(index)}
          >
            <span className="Question">{item.question}</span>
            <span className={`Simvol ${activeIndex === index ? "open" : ""}`}>
              {activeIndex === index ? "v" : "^"}
            </span>
          </div>
          <div
            className={`Question-answer ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};
