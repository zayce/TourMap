import { useMyContext } from "../UseContext";
import { useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./DescObject.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useTranslation } from "react-i18next";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCity,
  FaUniversity,
  FaMoneyBill,
} from "react-icons/fa";

const position = [40.39614304461201, 49.86782382165357]; // Точные координаты Heydar Aliyev Center

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export const DescObject = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { traveled } = useMyContext();

  const selectedItem = traveled.find((item) => item.id === Number(id));

  if (!selectedItem) return <div>Объект не найден</div>;
  return (
    <>
      <div className="DescObject-wrapper">
        <div className="DescObject-inner">
          <div className="DescObject-Title">
            {t(selectedItem.name)}
            {/* {e.name} */}
          </div>
          <div className="DescObject-Block">
            <div className="DescObject-img">
              {/* <img src={HeydarImg} /> */}
              <img src={selectedItem.descImgMain} />
            </div>

            <div className="DescObject-Top-Block">
              <div className="DescObject-Left-Top-Block">
                <div className="DescObject-Left-Top-Block-Title">О центре</div>
                <div className="DescObject-Left-Top-Block-Content">
                  <p>{t(selectedItem.minihistory)}</p>
                  <p>{t(selectedItem.minihistory2)}</p>
                </div>
              </div>

              <div className="DescObject-Right-Top-Block">
                <div className="DescObject-Right-Top-Block-Title">Часы</div>
                <ul className="DescObject-Casi-List">
                  <li>
                    <FaClock className="casi-icon" />
                    {/* Понедельник–пятница: 11:00–19:00 */}
                    {t(selectedItem.openClose)}
                  </li>
                  <li>
                    <FaCalendarAlt className="casi-icon" />
                    {/* Дата открытия: 10 мая 2012 */}
                    {t(selectedItem.timeBuild)}
                  </li>
                  <li>
                    <FaMapMarkerAlt className="casi-icon" />
                    {/* Адрес: проспект Гейдара Алиева, 1 */}
                    {t(selectedItem.adres)}
                  </li>
                  <li>
                    <FaCity className="casi-icon" />
                    {/* Город: Баку */}
                    {t(selectedItem.category)}
                  </li>
                  <li>
                    <FaUniversity className="casi-icon" />
                    {/* Категория: Музей */}
                    {t(selectedItem.special)}
                  </li>
                  <li>
                    <FaMoneyBill className="casi-icon" />
                    {/* Категория: Музей */}
                    {t(selectedItem.cost)}
                  </li>
                </ul>
              </div>
            </div>

            <div className="DescObject-Infos">
              <div className="DescObject-Infos-Title">
                {t(selectedItem.titleDescitemTop)}
              </div>

              <div className="DescObject-Infos-Component-One">
                <div className="DescObject-Infos-Component-One-Text">
                  {t(selectedItem.titleDescitemTopOpis)}
                </div>
                <img src={selectedItem.DescFirstHeydar} />
              </div>

              <div className="DescObject-Infos-Title">
                {t(selectedItem.titleDescitemBottom)}
              </div>

              <div className="DescObject-Infos-Component-two">
                <img src={t(selectedItem.DescSecondImg)} />
                <div className="DescObject-Infos-Component-two-Text">
                  {t(selectedItem.titleDescitembottomOpis)}
                </div>
              </div>
            </div>

            {/* <div className="DescObject-Bottom-Block fadeInUp">
              <div className="DescObject-Bottom-Top-Block-Title">
                История и значение
              </div>
              <div className="DescObject-Bottom-Content">
                <p>
                  Проект Культурного центра Гейдара Алиева был задуман как
                  символ новой эры Азербайджана — страны, соединяющей Восток и
                  Запад, традиции и инновации. Его архитектура отказывается от
                  прямых углов, отражая идею бесконечного диалога, открытости и
                  постоянного развития.
                </p>
                <p>
                  Здание построено по проекту <strong>Захи Хадид</strong>, одной
                  из самых влиятельных архитекторов XXI века. Её почерк — это
                  текучие формы, живые линии и ощущение движения. Каждый изгиб
                  центра словно повторяет пульс города, его ритм и душу.
                </p>
                <p>
                  Внутри располагаются музей, выставочные залы,
                  конференц-пространства и библиотека. Здесь проходят
                  международные симпозиумы, художественные экспозиции и
                  образовательные инициативы, направленные на развитие
                  культурной среды Азербайджана.
                </p>
                <p className="DescObject-fact">
                  💡 Интересный факт: архитектурная концепция центра входит в
                  десятку самых узнаваемых построек мира по версии{" "}
                  <em>ArchDaily</em>.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="DescObject-map">
          <h3>Где находится центр?</h3>
          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%", borderRadius: "12px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={position}>
              <Popup>Центр Гейдара Алиева</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};
