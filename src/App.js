import { Header } from "./AllPages/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import CardPayments from "./Pages/CardPayment/CardPayments";
import { Home } from "./Pages/Home";
import { AuthForm } from "./Pages/Registr/Registr";
import { Footer } from "./AllPages/Footer/Footer";

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

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Header } from "./AllCompanent/Header/Header";

// import "./App.scss";

// import { MyProvider } from "./Pages/UseContext";
// import { Footer } from "./AllCompanent/Footer/Footer";
// import { Home } from "./Pages/Home";
// import { Busket } from "./Pages/Busket";
// import { Payment } from "./Pages/Payment";
// import { Delivery } from "./Pages/Delivery";
// import { AboutUss } from "./Pages/AboutUs";
// import { Garant } from "./Pages/Garant";
// import { Catalog } from "./Pages/Catalog";
// import { Desc } from "./Pages/Desc";
// import { Registr } from "./Registr/Registr";
// import { Favorite } from "./Pages/Favorite";
// import { Regisster } from "./Pages/Regisster";
// import { CardPayment } from "./Pages/CardPayment";

// export const App = () => {
//   return (
//     <>
//       <MyProvider>
//         <BrowserRouter>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Busket" element={<Busket />} />
//             <Route path="/Payment" element={<Payment />} />
//             <Route path="/Delivery" element={<Delivery />} />
//             <Route path="/AboutUss" element={<AboutUss />} />
//             <Route path="/Garant" element={<Garant />} />
//             <Route path="/Catalog" element={<Catalog />} />
//             <Route path="/Desc/:id" element={<Desc />} />
//             <Route path="/Registr" element={<Regisster />} />
//             <Route path="/CardPayment" element={<CardPayment />} />
//             <Route path="/Favorite" element={<Favorite />} />
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       </MyProvider>
//     </>
//   );
// };
