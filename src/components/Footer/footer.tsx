import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  Container,
  Nav,
  Logo,
  AreaLogo,
  Text,
  AreaText,
  AreaIcon,
  Icons,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <AreaLogo>
        <Logo />
        <AreaText>
          <Text>Para mais informações:</Text>
          <AreaIcon>
            <FaPhoneAlt style={{ padding: 3 }} size={14} />
            <Text>+1 (234) 567-8910</Text>
          </AreaIcon>
        </AreaText>
      </AreaLogo>
      <Nav>
        <Text>Para mais informações:</Text>
        <Icons>
          <FaFacebookSquare size={28} />
          <FaTwitterSquare size={28} />
          <FaInstagramSquare size={28} />
        </Icons>
      </Nav>
    </Container>
  );
};

export default Footer;
