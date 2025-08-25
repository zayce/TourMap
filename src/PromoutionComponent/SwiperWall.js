import React from "react";
import { useTranslation } from "react-i18next";
import Baku from "./asests/sticer.jpeg";
import { Link } from "react-router-dom";
import "./SwiperWall.scss";

export const Quote = () => {
  const { t } = useTranslation();

  return (
    <div className="Quote-Wrapper">
      <div className="Quote-Inner">
        <div className="Quote-Block">
          <div className="Quote-First-Statement">{t("firstQuote")},</div>
          <div className="Quote-Second-Statement">{t("secondQuote")}.</div>
          <Link to={"/AboutUs"}>
            <button className="Quote-button">
              <span className="Quote">{t("learnMore")}</span>
            </button>
          </Link>
        </div>
        <div>
          <img src={Baku} alt="Baku" />
        </div>
      </div>
    </div>
  );
};
