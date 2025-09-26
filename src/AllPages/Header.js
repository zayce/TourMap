import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Face from "../AllPages/Allasessts/face.svg";
import Twit from "../AllPages/Allasessts/twit.svg";
import Inst from "./Allasessts/insta.svg";
import Youtube from "./Allasessts/yout.svg";
import Logo from "./Allasessts/icons.png";
import heart from "./Allasessts/heart.webp";
import "./Header.scss";

import i18n from "../i18n";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div className="Wrapper">
        <div className="Inner">
          <div className="Header-Top-Container">
            <div className="Header-left-container">
              <div className="number-company">tourmap25@gmail.com</div>
              <ul className="menu-social">
                <li className="item-social">
                  <img src={Face} className="social" />
                </li>
                <li className="item-social">
                  <img src={Twit} className="social" />
                </li>
                <li className="item-social">
                  <img src={Inst} className="social" />
                </li>
                <li className="item-social">
                  <img src={Youtube} className="social" />
                </li>
              </ul>
            </div>

            <div className="header-container-right">
              <Link to={"/Registr"}>
                <button className="enter-buttons">
                  <span className="enter">{t("login")}</span>
                </button>
              </Link>

              <select
                className="change-languages"
                onChange={handleLanguageChange}
                value={i18n.language}
              >
                <option value="az">Azer</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>

        <hr />

        <div className="Inner">
          <div className="Header-Buttom">
            <Link to={"/"}>
              <div className="Header-Logo">
                <div className="Header-logo-img">
                  <img src={Logo} className="Logo" />
                </div>
                <div className="Header-Name">TourMap</div>
              </div>
            </Link>

            <ul className="Header-menu-nav-items">
              <Link to={"/HomeQuestions"}>
                <li className="menu-nav-item">{t("questionsAndComments")}</li>
              </Link>
              <Link to={"/AboutUs"}>
                <li className="menu-nav-item">{t("aboutUs")}</li>
              </Link>
              <Link to={"/AllPlaces"}>
                <li className="menu-nav-item">{t("allPlaces")}</li>
              </Link>
              {/* <Link to={"/Rewiew"}>
                <li className="menu-nav-item">{t("leaveReview")}</li>
              </Link> */}
            </ul>

            <div className="Header-Butttons">
              <div className="Header-search">{/* SVG иконка поиска */}</div>
              <Link to={"/CardPayment"}>
                <div className="Header-like">
                  <img src={Twit} className="heart" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
