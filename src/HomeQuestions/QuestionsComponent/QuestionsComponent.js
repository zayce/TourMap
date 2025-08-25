import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./QuestionsComponent.scss";

export const Questions = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Получаем массив вопросов из перевода
  const questions = t("questions", { returnObjects: true });

  return (
    <div className="Question-Components">
      {questions.map((item, index) => (
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
