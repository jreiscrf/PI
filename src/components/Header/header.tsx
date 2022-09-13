import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Logo, AreaLogo } from "./styles";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return (
      <Container>
        <AreaLogo>
          <Logo />
        </AreaLogo>
        <Nav>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/home">
            Home
          </Link>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/">
            Sobre nós
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to="/depoimentos"
          >
            Depoimentos
          </Link>
        </Nav>
      </Container>
    );
  } else {
    return (
      <Container>
        <AreaLogo>
          <Logo />
        </AreaLogo>
        <Nav>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/">
            Sobre nós
          </Link>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/signin">
            Cadastre-se
          </Link>
        </Nav>
      </Container>
    );
  }
};

export default Header;
