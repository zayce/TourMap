import { createContext, useContext, useState, useEffect } from "react";

import HeydarAliyevCenter from "./assets/images/HeydarAliyevCenter.png";
import CarpetMuseumBaku from "./assets/images/Carpet.png";
import ArtMuseum from "./assets/images/ArtMuseum.png";
import MiniBook from "./assets/images/MiniBook.png";
import FireXram from "./assets/images/FireXram.png";
import NationalMusey from "./assets/images/NationalMusey.png";
import Literaturi from "./assets/images/LiteraturiMuseum.png";
import CentralMusei from "./assets/images/CentralMusei.png";
import IsteglalMusei from "./assets/images/IsteglalMusei.png";
import VurgunOlace from "./assets/images/Vurgunhouse.png";
import UzeirHouse from "./assets/images/UzeirHouse.png";
import JafarJabbarliHousem from "./assets/images/jafarjabbarlihousem.png";
import GanjaHistory from "./assets/images/GanjaHistory.png";
import MuzeyGandjs from "./assets/images/MuzeyGandjs.png";
import ShekiMuzet from "./assets/images/ShekiMuzey.png";
import WinterShekiMuzey from "./assets/images/WinterMuzey.png";

import GS from "./ServicesProvidedComponent/asestss/GabalaSeason.png";
import NS from "./ServicesProvidedComponent/asestss/NabranSeason.png";
import SHS from "./ServicesProvidedComponent/asestss/ShekiSeason.png";

import SHW from "./ServicesProvidedComponent/asestss/SahdagWinter.png";
import TufWin from "./ServicesProvidedComponent/asestss/TufanWinter.png";
import HinWin from "./ServicesProvidedComponent/asestss/HinaligWinter.png";

import SS from "./ServicesProvidedComponent/asestss/ShekiSpring.png";
import SG from "./ServicesProvidedComponent/asestss/SpringGax.png";
import Ls from "./ServicesProvidedComponent/asestss/LerikSpring.png";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const translations = {
    en: {
      aboutUs: "About Us",
      guarantees: "Guarantees and Returns",
      delivery: "Delivery",
      payment: "Payment",
      login: "Login / Register",
      leaveReview: "Leave a review",
      firstQuote: "Every place is a story",
      secondQuote: "every step is a discovery",
      learnMore: "Find out more",
      tourMap: "Tours to all cities",
      baku: "Baku",
      Ganja: "Ganja",
      Lankaran: "Lankaran",
      Shamakhi: "Shamakhi",
      Shusha: "Shusha",
      Sheki: "Sheki",
      Cuba: "Quba",
      Gabala: "Gabala",
      Khachmaz: "Khachmaz",
      Shaxdag: "Shahdag",
      Shamkir: "Shamkir",
      Ismailli: "Ismailli",
      Gazakh: "Gazakh",
      Zagatala: "Zagatala",
      generalTour: "General tour",
    },
    ru: {
      aboutUs: "О нас",
      guarantees: "Гарантии и возврат",
      delivery: "Доставка",
      payment: "Оплата",
      login: "Вход / Регистрация",
      leaveReview: "Оставьте отзыв",
      firstQuote: "Каждое место — это история",
      secondQuote: "каждый шаг — открытие",
      learnMore: "Узнай больше",
      tourMap: "Туры по всем городам",
      baku: "Баку",
      Ganja: "Гянджа",
      Lankaran: "Ленкорань",
      Shamakhi: "Шамахы",
      Shusha: "Шуша",
      Sheki: "Шеки",
      Cuba: "Куба",
      Gabala: "Габала",
      Khachmaz: "Хачмаз",
      Shaxdag: "Шахдаг",
      Shamkir: "Шамкир",
      Ismailli: "Исмаиллы",
      Gazakh: "Газах",
      Zagatala: "Загатала",
      generalTour: "Общий тур ",
    },
    az: {
      aboutUs: "Haqqımızda",
      guarantees: "Zəmanətlər və qaytarma",
      delivery: "Çatdırılma",
      payment: "Ödəmə",
      login: "Giriş / Qeydiyyat",
      leaveReview: "Rəy buraxın",
      firstQuote: "Hər yerin bir hekayəsi var",
      secondQuote: "hər addım bir kəşfdir",
      learnMore: "Ətraflı məlumat əldə edin",
      tourMap: "Bütün şəhərlərə turlar",
      baku: "Bakı",
      Ganja: "Gəncə",
      Lankaran: "Lənkəran",
      Shamakhi: "Şamaxı",
      Shusha: "Şuşa",
      Sheki: "Şəki",
      Cuba: "Kuba",
      Gabala: "Qəbələ",
      Khachmaz: "Xaçmaz",
      Shaxdag: "Şahdaq",
      Shamkir: "Şəmkir",
      Ismailli: "İsmayıllı",
      Gazakh: "Qazax",
      Zagatala: "Zaqatala",
      generalTour: "Ümumi tur",
    },
  };

  const [punktMenu, setPunktMenu] = useState([]);

  const [point, setPointed] = useState();

  const [museums, setMuseums] = useState([]);

  const traveled = [
    {
      img: HeydarAliyevCenter,
      id: 1,
      special: "Музей",
      specialization: "Музей",
      name: "Культурный центр Гейдара Алиева",
      openClose: " Пн-Пт: 11:00-19:00",
      timeBuild: "10 мая 2012 года",
      adres: "Азербайджан, Баку, проспект Гейдара Алиева, 1",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: heydaraliyevcenter.az",
      category: "Baku",
    },
    {
      img: CarpetMuseumBaku,
      id: 2,
      specialization: "Музей",
      special: "Музей",
      name: "Азербайджанский музей Ковра",
      openClose: " вт-пт 10:00–18:00; сб 11:00–19:00",
      timeBuild: "13 марта 1967 года",
      adres: "г. Баку, ул. Микаила Усейнова, 27.",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: azcarpetmuseum.az",
      category: "Baku",
    },
    {
      img: ArtMuseum,
      id: 3,
      specialization: "Музей",
      special: "Музей",
      name: "Музей современного искусства",
      openClose: " вт-вс 11:00–21:00",
      timeBuild: "20 марта 2009 года",
      adres: " Азербайджан, Баку, улица Юсифа Сафарова, 5",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: azcarpetmuseum.az",
      category: "Baku",
    },
    {
      img: MiniBook,
      id: 4,
      specialization: "Музей",
      special: "Музей",
      name: "Бакинский музей миниатюрной книги",
      openClose: " вт-cр,пт-вс 11:00–21:00",
      timeBuild: "23 апреля 2002 года",
      adres: " Баку, 1-й Замковский переулок, 67.",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: azcarpetmuseum.az",
      category: "Baku",
    },
    {
      img: FireXram,
      id: 5,
      specialization: "Музей",
      special: "Музей",
      name: "Атешгях — храм огнепоклонников",
      openClose: " вт-cр,пт-вс 11:00–21:00",
      timeBuild: "1975 год",
      adres: "Сураханы",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: ateshgahtemple.az",
      category: "Baku",
    },
    {
      img: NationalMusey,
      id: 6,
      specialization: "Музей",
      special: "Музей",
      name: "Национальный музей истории Азербайджана",
      openClose: "вт-вс 10:00–17:00",
      timeBuild: "1920 год",
      adres: "Баку, у. Тагиева Гаджи Зейналабдина, 4A",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: ateshgahtemple.az",
      category: "Baku",
    },
    {
      img: Literaturi,
      id: 7,
      specialization: "Музей",
      special: "Музей",
      name: "Музей азербайджанской литературы",
      openClose: "ежедневно 11:00–17:00",
      timeBuild: "1939 год",
      adres: "Азербайджан, улица Истиглалият, 77",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: nizamimuseum.az/…",
      category: "Baku",
    },
    {
      img: CentralMusei,
      id: 8,
      specialization: "Музей",
      special: "Музей",
      name: "Музейный центр",
      openClose: "вт-вс 10:00–17:00",
      timeBuild: "1955 год",
      adres: "Азербайджан, Баку, проспект Нефтчилер, 49",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: museumcenter.az",
      category: "Baku",
    },
    {
      img: IsteglalMusei,
      id: 9,
      specialization: "Музей",
      special: "Музей",
      name: "Музей независимости",
      openClose: "вт-вс 10:00–17:00",
      timeBuild: " 7 декабря 1919 года",
      adres: "Азербайджан, Баку, проспект Нефтчилер, 49",
      sayt: "Сайт: istiqlalmuzeyi.gov.az",
      category: "Baku",
    },
    {
      img: VurgunOlace,
      id: 10,
      specialization: "Музей",
      special: "Музей",
      name: "Дом-музей Самеда Вургуна",
      openClose: "вт-вс 10:00–17:00",
      // timeBuild: "1955 год",
      adres: "ул. Тарлана Алиярбекова, 6",
      sayt: "Сайт: museumcenter.az",
      category: "Baku",
    },
    {
      img: UzeirHouse,
      id: 11,
      specialization: "Музей",
      special: "Музей",
      name: "Дом-музей Узеира Гаджибекова",
      openClose: "вт-вс 09:00–18:00",
      timeBuild: "1955 год",
      adres: "ул. Шамиля Азизбекова, 65",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: museumcenter.az",
      category: "Baku",
    },
    {
      img: JafarJabbarliHousem,
      id: 12,
      specialization: "Музей",
      special: "Музей",
      name: "Дом-музей Джафара Джаббарлы",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "1979 год",
      adres: "Азербайджан, Баку, улица Исмаил-бека Куткашенского, 64A",
      rooms: "Количество выставочных залов: 5",
      sayt: "Сайт: museumcenter.az",
      category: "Baku",
    },
    {
      img: GanjaHistory,
      id: 13,
      specialization: "Музей",
      special: "Музей",
      name: "Историко-этнографический музей Гянджи",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "1924 год",
      adres: "пр. Ататюрка, 424. ",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Gandja",
    },
    {
      img: MuzeyGandjs,
      id: 14,
      specialization: "Музей",
      special: "Музей",
      name: "Музей Гейдара Алиева",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "",
      adres: "Проспект Гейдара Алиева, 430",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Gandja",
    },
    {
      img: ShekiMuzet,
      id: 15,
      specialization: "Музей",
      special: "Музей",
      name: "Дворец Шекинских ханов",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "1797 год",
      adres: "пр. Ататюрка, 424. ",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Sheki",
    },
    {
      img: WinterShekiMuzey,
      id: 16,
      specialization: "Музей",
      special: "Музей",
      name: "Дворец Шекинских ханов",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "1797 год",
      adres: "пр. Ататюрка, 424. ",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Sheki",
    },
    {
      img: WinterShekiMuzey,
      id: 17,
      specialization: "Парки",
      special: "Парки",
      name: "Дворец Шекинских ханов",
      openClose: "вт-вс 9:00–18:00",
      timeBuild: "1797 год",
      adres: "пр. Ататюрка, 424. ",
      rooms: "Количество выставочных залов: 5",
      sayt: "-",
      category: "Sheki",
    },
  ];

  const [season, setSeason] = useState([]);

  const addToDesc = (product) => {
    setSeason([{ ...product, postId: 1 }]);
  };

  const SeasonData = [
    {
      id: 1,
      img: GS,
      postId: 1,
      name: "Габала",
      title: "Чeм интересен путешествие в Габалу",
    },
    { id: 2, img: NS, postId: 1, name: "Набран" },
    { id: 3, img: SHS, postId: 1, name: "Шеки" },
    { id: 4, img: SHW, postId: 3, name: "Шахдаг" },
    { id: 5, img: TufWin, postId: 3, name: "Туфандаг" },
    { id: 6, img: HinWin, postId: 3, name: "Хыналыг" },
    { id: 7, img: SS, postId: 2, name: "Шеки" },
    { id: 8, img: SG, postId: 2, name: "Гах" },
    { id: 9, img: Ls, postId: 2, name: "Лерик" },
  ];

  const [language, setLanguage] = useState("ru");
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <MyContext.Provider
      value={{
        handleLanguageChange,
        language,
        translations,
        punktMenu,
        museums,
        traveled,
        SeasonData,
        addToDesc,
        season,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext должен использоваться внутри MyProvider");
  }
  return context;
};
