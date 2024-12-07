const express = require("express");
const app = express();
const port = 3000;

// Пример массива объектов с информацией о достопримечательностях
const attractions = [
  {
    name: "Баку",
    img: "/images/baku.png",
    id: 1,
    state: "Popular",
    person: "для граждан 5azn",
  },
  {
    name: "Шеки",
    img: "/images/Sheki.png",
    id: 3,
    state: "Scenic",
    person: "для граждан 4azn",
  },
  {
    name: "Шуша",
    img: "/images/khinalug.png",
    id: 6,
    state: "Mountain",
    person: "для граждан 5azn",
  },
  {
    name: "Габала",
    img: "/images/qabala.png",
    id: 8,
    state: "Tourist",
    person: "для граждан 10azn",
  },
];

app.get("/attractions", (req, res) => {
  res.json(attractions);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store"); // Отключает кэширование
  next();
});
