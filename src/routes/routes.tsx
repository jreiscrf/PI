import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import SobreNos from "../pages/SobreNos/sobrenos";
import SignIn from "../pages/SignIn/signin";
import Parceiros from "../pages/Parceiros/parceiros";
import Header from "../components/Header/header";
import Depoimentos from "../pages/Depoimentos/depoimentos";
import Adotar from "../pages/Adotar/adotar";
import Footer from "../components/Footer/footer";
import { useSelector, useDispatch } from "react-redux";

export default function Rotas() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/adotar" element={<Adotar />} />
          <Route path="/" element={<SobreNos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<SobreNos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
