import React from "react";
import { useTranslation } from "react-i18next";
import "./CreatedRewiew.scss";
import pic2 from "./createAsessts/Pic2.jpg";

export const Review = () => {
  const { t } = useTranslation();

  return (
    <div className="review-wrapper">
      <div className="review-inner">
        <div className="review-title">{t("leaveReviewTitle")}</div>
        <div className="review-label">
          <div className="review-input">
            <label>
              <div className="name">{t("nameLabel")}</div>
              <input type="text" placeholder={t("namePlaceholder")} />
            </label>
            <label>
              <div className="review">{t("reviewLabel")}</div>
              <textarea placeholder={t("reviewPlaceholder")}></textarea>
            </label>
            <label>
              <div className="mail">{t("emailLabel")}</div>
              <input type="email" placeholder={t("emailPlaceholder")} />
            </label>
            <label>
              <div className="rare">{t("ratingLabel")}</div>
              <input
                type="number"
                min="1"
                max="5"
                placeholder={t("ratingPlaceholder")}
              />
            </label>
            <button className="submit-btn">{t("submitReview")}</button>
          </div>
          <div className="review-img">
            <img src={pic2} alt="Review visual" className="img img2" />
          </div>
        </div>
      </div>
    </div>
  );
};
