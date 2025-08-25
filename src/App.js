// В файле App.js
import "leaflet/dist/leaflet.css";
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
import { HomeQuestions } from "./HomeQuestions/HomeQuestions";
import { AboutUs } from "./AboutUsComponent/AboutUs";
import { DescObject } from "./DescObjectComponent/DescObject";
import { CityTourComponent } from "./CityTourComponent/CityTourComponent";

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
            <Route path="/HomeQuestions" element={<HomeQuestions />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/desc/:id" element={<DescObject />} />
            <Route path="/CityTourComponent/:category" element={<CityTourComponent />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyProvider>
    </>
  );
};

export default App;
