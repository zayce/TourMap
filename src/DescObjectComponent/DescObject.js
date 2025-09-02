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
                <img className="img-component-text" src={selectedItem.DescFirstHeydar} />
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
          </div>
        </div>

        <div className="DescObject-map">
          <h3>Где находится объект?</h3>
          <MapContainer
            center={selectedItem.position}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%", borderRadius: "12px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={selectedItem.position}>
              {" "}
              {/* 👈 и тут */}
              <Popup>{t(selectedItem.name)}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};
