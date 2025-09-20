import Logo from "../../AllPages/Allasessts/icons.png";
import Vk from "../Footer/VK.png";
import Inst from "../Footer/instagram.png";
import FB from "../Footer/Fc.png";
import Visa from "../Footer/Visa.png";
import Mc from "../Footer/MC.png";
import Mir from "../Footer/ghj.png";
import { useTranslation } from "react-i18next";

import "../Footer/Footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="Footer-wrapper">
      <div className="Footer-inner">
        {/* Левая часть */}
        <div className="Footer-left">
          <Link to={"/"} className="Footer-Logo">
            <img src={Logo} className="Logo" alt="TourMap Logo" />
            <span className="Footer-Name">TourMap</span>
          </Link>

          <div className="Footer-Social">
            <span className="Footer-Social-text">Мы в соцсетях:</span>
            <div className="Footer-Social-Imgs">
              <a href="https://vk.com" target="_blank" rel="noreferrer">
                <img src={Vk} alt="VK" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={Inst} alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={FB} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>

        {/* Меню */}
        <ul className="Footer-Menu">
          <li className="Menu-Footer-header-item">КОМПАНИЯ</li>
          <Link to={"/HomeQuestions"}>
            <li className="menu-nav-item">{t("questionsAndComments")}</li>
          </Link>
          <Link to={"/AboutUs"}>
            <li className="menu-nav-item">{t("aboutUs")}</li>
          </Link>
          <Link to={"/AllPlaces"}>
            <li className="menu-nav-item">{t("allPlaces")}</li>
          </Link>
        </ul>

        {/* Карты */}
        <div className="Footer-payments">
          <span>Мы принимаем:</span>
          <div className="Footer-Cards">
            <img src={Visa} alt="Visa" />
            <img src={Mc} alt="MasterCard" />
            <img src={Mir} alt="Mir" />
          </div>
        </div>
      </div>

      {/* Нижняя линия */}
      <div className="Footer-bottom">© 2025 TourMap. Все права защищены.</div>
    </footer>
  );
};
