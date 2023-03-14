import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import HeroPage from "./Pages/heroPage";
import "./assets/css/app.css"
import Footer from "./Components/footer";
import ContactPage from "./Pages/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
