import styled from "styled-components";
import Image from "../../assets/images/dog.jpg";

const BackgroundImage = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export { BackgroundImage };
