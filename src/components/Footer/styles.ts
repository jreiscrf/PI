import styled from "styled-components";
import LogoImage from "../../assets/images/logo.png";

const Container = styled.div`
  display: flex;
  background-color: #f2f2f2;
  justify-content: space-between;
  align-items: center;
`;

const AreaLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37%;
  height: 100%;
  padding: 5px;
  justify-content: space-evenly;
`;

const AreaText = styled.div``;

const AreaIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.p`
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 1px;
`;

const Nav = styled.div`
  width: 40%;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
`;

const Icons = styled.div`
  display: flex;
  width: 20%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1px;
`;

const Logo = styled.img.attrs({
  src: LogoImage,
})`
  width: 75px;
  height: 65px;
  background-color: #fff;
  border-radius: 30px;
`;

export { Container, Nav, Logo, AreaLogo, Text, AreaText, AreaIcon, Icons };
