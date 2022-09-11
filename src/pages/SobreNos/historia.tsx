import React from "react";

import Sobre from "./sobre";
import {
  ImageHistoria,
  BackgroundHistoria,
  Icone,
} from "./styles";

const texto = () => {
  return (
    <BackgroundHistoria>
      <Sobre />
      <Icone>
        <ImageHistoria />
      </Icone>
    </BackgroundHistoria>
  );
};

export default texto;