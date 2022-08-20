import React from "react";

import {
  BackgroundHistoria,
  Sobre,
  Title,
  Texto,
} from "./styles";

const sobre = () => {
  return (
    <BackgroundHistoria>
      <Sobre>
        <Title>SOBRE NOS </Title>
        <Texto>
          Adotar um animal é salvar uma vida, dar uma nova chance para que ele possa receber e dar
          amor. Por mais linda que essa ação seja, ela não é tão simples, e nós buscamos criar um
          aplicativo que não só una ambas as partes, doador e adotante, mas traga informações a
          respeito do que um animal precisa, cuidados, dicas, etc.
        </Texto>
      </Sobre>
    </BackgroundHistoria>
  );
};

export default sobre;