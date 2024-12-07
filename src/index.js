// В файле index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Импортируем из 'react-dom/client'
import App from "./App"; // Теперь импортируем как default

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // Рендерим компонент
