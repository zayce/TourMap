import Logo from "../../AllPages/Allasessts/icons.png";
import Vk from "../Footer/VK.png";
import Inst from "../Footer/instagram.png";
import FB from "../Footer/Fc.png";
import Visa from "../Footer/Visa.png";
import Mc from "../Footer/MC.png";
import Mir from "../Footer/ghj.png";

import "../Footer/Footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="Footer-wrapper">
      <div className="Footer-inner">
        <div className="Footersss">
          <div className="Footer-Imgs-block">
            <Link to={"/"}>
              <div className="Footer-Logo">
                <div className="Footer-logo-img">
                  <img src={Logo} className="Logo" />
                </div>
                <div className="Footer-Name">TourMap</div>
              </div>
            </Link>
            <div className="Footer-Social-text">Мы в социальных сетях</div>
            <div className="Footer-Social-Imgs">
              <img src={Vk} alt="VK" />
              <img src={Inst} alt="Instagram" />
              <img src={FB} alt="Facebook" />
            </div>
            <div className="Footer-adds">Мы принимаем</div>
            <div className="footer-Cards">
              <img src={Visa} alt="Visa" />
              <img src={Mc} alt="MasterCard" />
              <img src={Mir} alt="Mir" />
            </div>
          </div>
          <div className="Menus">
            <ul className="Footer-Menu">
              <li className="Menu-Footer-header-item">ПОКУПАТЕЛЮ</li>
              <li className="Menu-Footer-items">
                <Link to={"/Delivery"}>Доставка</Link>
              </li>
              <li className="Menu-Footer-items">
                <Link to={"/Payment"}>Оплата</Link>
              </li>
              <li className="Menu-Footer-items">
                <Link to={"/Garant"}>Гарантии и возврат</Link>
              </li>
              <li className="Menu-Footer-items">Производители</li>
              <li className="Menu-Footer-items">Статьи</li>
            </ul>
            <ul className="Footer-Menu">
              <li className="Menu-Footer-header-item">КОМПАНИЯ</li>
              <li className="Menu-Footer-items">
                <Link to={"/AboutUss"}>О нас</Link>
              </li>
              <li className="Menu-Footer-items">Контакты</li>
              <li className="Menu-Footer-items">Пользовательское соглашение</li>
              <li className="Menu-Footer-items">Политика конфиденциальности</li>
              <li className="Menu-Footer-items">Обратная связь</li>
            </ul>
            <ul className="Footer-Menu">
              <li className="Menu-Footer-header-item">КОНТАКТЫ</li>
              <li className="Menu-Footer-items">(+994) 55 123 45 67</li>
              <li className="Menu-Footer-items">zakaz@gidratop.ru</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
