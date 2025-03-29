const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

// Пример ссылки на изображение (замените на настоящий путь или URL)
const HeydarAliyevCenter =
  "https://example.com/images/heydar-aliyev-center.jpg";

// Данные, которые будут отправлены в ответ
const traveled = [
  {
    img: HeydarAliyevCenter,
    id: 1,
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
    img: HeydarAliyevCenter,
    id: 2,
    specialization: "Музей",
    name: "Азербайджанский музей Ковра",
    openClose: "вт-пт 10:00–18:00; сб 11:00–19:00",
    timeBuild: "13 марта 1967 года",
    adres: "г. Баку, ул. Микаила Усейнова, 27.",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: azcarpetmuseum.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 3,
    specialization: "Музей",
    name: "Музей современного искусства",
    openClose: " вт-вс 11:00–21:00",
    timeBuild: "20 марта 2009 года",
    adres: " Азербайджан, Баку, улица Юсифа Сафарова, 5",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: azcarpetmuseum.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 4,
    specialization: "Музей",
    name: "Бакинский музей миниатюрной книги",
    openClose: " вт-cр,пт-вс 11:00–21:00",
    timeBuild: "23 апреля 2002 года",
    adres: " Баку, 1-й Замковский переулок, 67.",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: azcarpetmuseum.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 5,
    specialization: "Музей",
    name: "Атешгях — храм огнепоклонников",
    openClose: " вт-cр,пт-вс 11:00–21:00",
    timeBuild: "1975 год",
    adres: "Сураханы",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: ateshgahtemple.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 6,
    specialization: "Музей",
    name: "Национальный музей истории Азербайджана",
    openClose: "вт-вс 10:00–17:00",
    timeBuild: "1920 год",
    adres: "Азербайджан, Баку, улица Тагиева Гаджи Зейналабдина, 4A",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: ateshgahtemple.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 7,
    specialization: "Музей",
    name: "Музей азербайджанской литературы",
    openClose: "ежедневно 11:00–17:00",
    timeBuild: "1939 год",
    adres: "Азербайджан, улица Истиглалият, 77",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: nizamimuseum.az/…",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 8,
    specialization: "Музей",
    name: "Музейный центр",
    openClose: "вт-вс 10:00–17:00",
    timeBuild: "1955 год",
    adres: "Азербайджан, Баку, проспект Нефтчилер, 49",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: museumcenter.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 9,
    specialization: "Музей",
    name: "Музей независимости",
    openClose: "вт-вс 10:00–17:00",
    timeBuild: " 7 декабря 1919 года",
    adres: "Азербайджан, Баку, проспект Нефтчилер, 49",
    sayt: "Сайт: istiqlalmuzeyi.gov.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 10,
    specialization: "Музей",
    name: "Дом-музей Самеда Вургуна",
    openClose: "вт-вс 10:00–17:00",
    // timeBuild: "1955 год",
    adres: "ул. Тарлана Алиярбекова, 6",
    sayt: "Сайт: museumcenter.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 11,
    specialization: "Музей",
    name: "Дом-музей Узеира Гаджибекова",
    openClose: "вт-вс 09:00–18:00",
    timeBuild: "1955 год",
    adres: "ул. Шамиля Азизбекова, 65",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: museumcenter.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 12,
    specialization: "Музей",
    name: "Дом-музей Джафара Джаббарлы",
    openClose: "вт-вс 9:00–18:00",
    timeBuild: "1979 год",
    adres: "Азербайджан, Баку, улица Исмаил-бека Куткашенского, 64A",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: museumcenter.az",
    category: "Baku",
  },
  {
    img: HeydarAliyevCenter,
    id: 13,
    specialization: "Музей",
    name: "Музейный центр",
    openClose: "вт-вс 10:00–17:00",
    timeBuild: "1955 год",
    adres: "Азербайджан, Баку, проспект Нефтчилер, 49",
    rooms: "Количество выставочных залов: 5",
    sayt: "Сайт: museumcenter.az",
    category: "Baku",
  },
];
app.get("/traveled", (req, res) => {
  console.log("Запрос к /traveled");
  res.json(traveled);
});

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store"); // Отключает кэширование
  next();
});
// Запуск сервера
app.listen(3003, () => {
  console.log("Server running at http://localhost:3003");
});
