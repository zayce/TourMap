import "./HomeQuestions.scss";
import { Questions } from "./QuestionsComponent/QuestionsComponent";

export const HomeQuestions = () => {
  // Что включено в стоимость тура?
  // Какова продолжительность тура и есть ли гибкость в датах?
  // Какие ограничения существуют для путешествующих с животными?
  //   Какова доступность транспорта на месте?
  // Какова политика по отмене и возврату денежных средств?
  return (
    <>
      <div className="Title-Ques">Вопросы и Комментарии</div>
      <div className="Ques-wrapper">
        <div className="Ques-inner">
          <Questions />
          <div></div>
        </div>
      </div>
    </>
  );
};
