import { Header } from "./AllPages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import CardPayments from "./Pages/CardPayment/CardPayments";
import { Home } from "./Pages/Home";
import { AuthForm } from "./Pages/Registr/Registr";
import { Footer } from "./AllPages/Footer/Footer";
import { SwiperWall } from "./PromoutionComponent/SwiperWall";

export const Appp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CardPayment" element={<CardPayments />} />
          <Route path="/Registr" element={<AuthForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};