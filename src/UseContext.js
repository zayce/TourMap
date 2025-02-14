import { createContext, useContext, useState, useEffect } from "react";

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
  const [language, setLanguage] = useState("ru");
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <MyContext.Provider
      value={{ handleLanguageChange, language, translations }}
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
