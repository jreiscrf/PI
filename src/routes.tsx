import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import SobreNos from "./pages/SobreNos/sobrenos";
import SignIn from "./pages/SignIn/signin";
import Parceiros from "./pages/Parceiros/parceiros";
import Header from "./components/Header/header";
import Depoimentos from "./pages/Depoimentos/depoimentos";
import Adotar from "./pages/Adotar/adotar";
import Footer from "./components/Footer/footer";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/adotar" element={<Adotar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
