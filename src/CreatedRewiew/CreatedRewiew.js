import React from "react";
import "./CreatedRewiew.scss";
import pic1 from "./createAsessts/Pic1.jpg";
import pic2 from "./createAsessts/Pic2.jpg";

export const Review = () => {
  return (
    <div className="review-wrapper">
      <div className="review-inner">
        <div className="review-title">Оставьте отзыв</div>
        <div className="review-label">
          <div className="review-input">
            <label>
              <div>Имя</div>
              <input type="text" placeholder="Введите ваше имя" />
            </label>
            <label>
              <div>Отзыв</div>
              <textarea placeholder="Ваш отзыв"></textarea>
            </label>
            <label>
              <div>Электронная почта</div>
              <input type="email" placeholder="Введите ваш email" />
            </label>
            <label>
              <div>Оценка</div>
              <input type="number" min="1" max="5" placeholder="От 1 до 5" />
            </label>
            <button className="submit-btn">Отправить отзыв</button>
          </div>
          <div className="review-img">
            {/* <img src={pic1} alt="Pic1" className="img" /> */}
            <img src={pic2} alt="Pic2" className="img img2" />
          </div>
        </div>
      </div>
    </div>
  );
};
