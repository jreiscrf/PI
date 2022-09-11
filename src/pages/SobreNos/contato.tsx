import React from "react";
import { FaEnvelope, FaFacebookF, FaGlobe, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import {
  BackgroundImageContato, ContatoQuadro, ItemContato, TextoSpan, TitleContato, Nav, TextoP, IconsContato, TextoSpanIcon
} from "./styles";

const texto = () => {
  return (
    <BackgroundImageContato>
      <ContatoQuadro>
        <TitleContato>Nosso Contato</TitleContato>
          <TextoSpan>Nos siga nas redes sociais para ficar por dentro das novidades</TextoSpan>
        <Nav>
          <ItemContato>
            <TextoSpan><FaGlobe size={30} color='#fff'/></TextoSpan>
            <TextoSpan>ENDEREÇO</TextoSpan>
            <TextoP>Rua da Solidariedade, 100</TextoP>
          </ItemContato>
          <ItemContato>
            <TextoSpan><FaPhone size={30} color='#fff'/></TextoSpan>
            <TextoSpan>TELEFONE</TextoSpan>
            <TextoP>(00) 1234-56789</TextoP>
          </ItemContato>
          <ItemContato>
            <TextoSpan><FaEnvelope size={30} color='#fff' /></TextoSpan>
            <TextoSpan>EMAIL</TextoSpan>
            <TextoP>contatoauamigos@auau.com.br</TextoP>
          </ItemContato>
          <ItemContato>
            <TextoSpanIcon>REDES SOCIAIS</TextoSpanIcon>
            <IconsContato>
              <FaFacebookF size={25} color='#3B5998'/>
              <FaTwitter size={25} color='#55ACEE'/>
              <FaInstagram size={25} color='#C536A4'/>
            </IconsContato>
          </ItemContato>
      </Nav>
      </ContatoQuadro>
    </BackgroundImageContato>
  );
};

export default texto;
