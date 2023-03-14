import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

//Importing Pages

import Header from "./Components/header";
import HomePage from "./Pages/homePage"
import AboutPage from "./Pages/aboutPage"
import ContactPage from "./Pages/contactPage"
import ServicePage from "./Pages/servicesPage"
import ProductsPage from "./Pages/productsPage"
import Preloader from "./Components/preloader"
import Abc from "./Components/abc";

function App() {
  const [preloader, setPreloader] = useState(false)
  useEffect(() => {
    setPreloader(false)
    setTimeout(() => {
      setPreloader(false)
    }, 3000);
  }, [])
  return (
    <>

{preloader === true ? <Preloader /> :
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/"  element={<HomePage/>} />
          <Route exact path="/about"  element={<AboutPage/>} />
          <Route exact path="/contact"  element={<ContactPage/>} />
          <Route exact path="/products"  element={<ProductsPage/>} />
          <Route exact path="/services"  element={<ServicePage/>} />
          <Route exact path="/abc"  element={<Abc/>} />
        </Routes>
    </BrowserRouter>}
    </>
  );
}

export default App;
