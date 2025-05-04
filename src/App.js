// В файле App.js
import { Header } from "./AllPages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import CardPayments from "./Pages/CardPayment/CardPayments";
import { Home } from "./Pages/Home";
import { AuthForm } from "./Pages/Registr/Registr";
import { Footer } from "./AllPages/Footer/Footer";
import { Review } from "./CreatedRewiew/CreatedRewiew";
import { MyProvider } from "./UseContext";
import { AllPlaces } from "./AllPlacesComponent/AllPlaces";
import { Season } from "./ServicesProvidedComponent/SeasonComponent/Season";
import { SelectedObject } from "./SelectedObjectComponent/SelectedObject";

const App = () => {
  return (
    <>
      <MyProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CardPayment" element={<CardPayments />} />
            <Route path="/Registr" element={<AuthForm />} />
            <Route path="/Rewiew" element={<Review />} />
            <Route path="/AllPlaces" element={<AllPlaces />} />
            <Route path="/Season/:postId" element={<Season />} />
            <Route
              path="/SelectedObject/:specialization"
              element={<SelectedObject />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyProvider>
    </>
  );
};

export default App; // Экспортируем как default

// Понял задачу! Ты хочешь, чтобы при нажатии на категорию товаров (например, "Брюки" или "Кофты") выводились только те товары, которые принадлежат выбранной категории. Товары у тебя хранятся в массиве, и нужно отфильтровать их по категории.

// Вот пример того, как можно реализовать это с помощью React и JavaScript:

// У тебя будет массив товаров, где каждый товар имеет категорию.
// При нажатии на категорию фильтруются товары, и отображаются только те, что принадлежат выбранной категории.
// Пример кода:
// javascript
// Copy
// import React, { useState } from 'react';

// // Пример массива товаров
// const products = [
//   { id: 1, name: "Брюки скини", category: "Брюки" },
//   { id: 2, name: "Кофта с капюшоном", category: "Кофты" },
//   { id: 3, name: "Спортивные брюки", category: "Брюки" },
//   { id: 4, name: "Трикотажная кофта", category: "Кофты" },
//   // Добавь другие товары по аналогии
// ];

// const categories = ["Брюки", "Кофты"];  // Категории товаров

// const App = () => {
//   // Состояние для выбранной категории
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Функция для фильтрации товаров по категории
//   const filteredProducts = selectedCategory
//     ? products.filter(product => product.category === selectedCategory)
//     : products;

//   return (
//     <div>
//       <h1>Магазин одежды</h1>

//       <div>
//         <h2>Выберите категорию:</h2>
//         {categories.map(category => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <h2>Товары:</h2>
//       <ul>
//         {filteredProducts.map(product => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// Объяснение:
// Массив товаров (products): Это массив объектов, где каждый товар имеет id, name (название товара) и category (категория товара).
// Массив категорий (categories): Это список категорий товаров (например, "Брюки", "Кофты").
// Состояние selectedCategory: Это состояние, которое хранит выбранную категорию. Когда ты нажимаешь на кнопку категории, это состояние обновляется.
// Фильтрация товаров: Если выбрана категория, то с помощью filter из массива товаров мы оставляем только те, которые соответствуют выбранной категории. Если категория не выбрана, то отображаются все товары.
// Отображение кнопок категорий: Создаётся список кнопок для каждой категории. При нажатии на кнопку, обновляется состояние и фильтруются товары.
// Этот код даст тебе динамическое отображение товаров в зависимости от выбранной категории. Ты можешь адаптировать его под свой проект, добавив больше товаров и категорий.
