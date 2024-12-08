const express = require("express");
const app = express();
const port = 3000;

// Пример массива объектов с информацией о достопримечательностях


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
