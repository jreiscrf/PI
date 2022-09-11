import React from "react";

import Contato from "./contato";
import Historia from "./historia";
import {
  Container
} from "./styles";

const SobreNos = () => {
  return (
    <Container>
      <Historia />
      <Contato />
    </Container>
  );
};

export default SobreNos;
