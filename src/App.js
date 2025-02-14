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
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyProvider>
    </>
  );
};

export default App; // Экспортируем как default
