import Baku from "./asests/sticer.jpeg";
import { useMyContext } from "../UseContext.js";
import "./SwiperWall.scss";

export const Quote = () => {
  const { language, translations } = useMyContext();
  return (
    <>
      <div className="Quote-Wrapper">
        <div className="Quote-Inner">
          <div className="Quote-Block">
            <div className="Quote-First-Statement">
              {translations[language].firstQuote},
            </div>
            <div className="Quote-Second-Statement">
              {translations[language].secondQuote}.
            </div>
            <button className="Quote-button">
              <span className="Quote">{translations[language].learnMore}</span>
            </button>
          </div>
          <div>
            <img src={Baku} />
          </div>
        </div>
      </div>
    </>
  );
};
