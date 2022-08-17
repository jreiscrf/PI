import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Logo, AreaLogo } from "./styles";

const Header = () => {
  return (
    <Container>
      <AreaLogo>
        <Logo />
      </AreaLogo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/sobrenos">Sobre nós</Link>
        <Link to="/parceiros">Clínicas Parceiras</Link>
        <Link to="/depoimentos">Depoimentos</Link>
        <Link to="/adotar">Quero Adotar!</Link>
        <Link to="/signin">Cadastre-se</Link>
      </Nav>
    </Container>
  );
};

export default Header;
