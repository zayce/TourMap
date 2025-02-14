import React from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../UseContext.js";

import Face from "../AllPages/Allasessts/face.svg";
import Twit from "../AllPages/Allasessts/twit.svg";
import Inst from "./Allasessts/insta.svg";
import Youtube from "./Allasessts/yout.svg";
import Logo from "./Allasessts/icons.png";
import heart from "./Allasessts/heart.webp";
import "./Header.scss";

export const Header = () => {
  const { handleLanguageChange, language, translations } = useMyContext();

  return (
    <>
      <div className="Wrapper">
        <div className="Inner">
          <div className="Header-Top-Container">
            <div className="Header-left-container">
              <div className="number-company">(+994) 55 123 45 67 </div>
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
                  <span className="enter">{translations[language].login}</span>
                </button>
              </Link>

              <select
                className="change-languages"
                onChange={handleLanguageChange}
                value={language}
              >
                <option className="language" value="ru">
                  Русский
                </option>
                <option className="language" value="en">
                  English
                </option>
                <option className="language" value="az">
                  Azer
                </option>
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
              <li className="menu-nav-item">календарь мероприятий</li>
              <li className="menu-nav-item">календарь мероприятий</li>
              <li className="menu-nav-item">календарь мероприятий</li>
              <li className="menu-nav-item">календарь мероприятий</li>
              <Link to={"/Rewiew"}>
                <li className="menu-nav-item">
                  {translations[language].leaveReview}
                </li>
              </Link>
            </ul>
            <div className="Header-Butttons">
              <div className="Header-search">
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  className="d Vb UmNoP"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.12 4.14a5.99 5.99 0 1 0 0 11.98 5.99 5.99 0 0 0 0-11.98m-7.49 5.99a7.49 7.49 0 1 1 13.299 4.728L21.37 20.3l-1.06 1.061-5.44-5.44A7.49 7.49 0 0 1 2.63 10.13"
                  ></path>
                </svg>
              </div>
              <div className="Header-like">
                <img src={heart} className="heart" />
              </div>

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
