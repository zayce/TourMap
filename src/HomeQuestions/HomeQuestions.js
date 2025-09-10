import { useTranslation } from "react-i18next";
import "./HomeQuestions.scss";
import { Questions } from "./QuestionsComponent/QuestionsComponent";
import { ReviewComponent } from "./ReviewComponent/ReviewComponent";

export const HomeQuestions = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="Title-Ques">{t("questionsAndComments")}</div>
      <div className="Ques-wrapper">
        <div className="Ques-inner">
          <Questions />
          {/* <ReviewComponent /> */}
        </div>
      </div>
    </>
  );
};
