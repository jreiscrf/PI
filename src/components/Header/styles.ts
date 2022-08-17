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
  width: 20%;
  height: 100%;
  padding: 5px;
`;

const Nav = styled.nav`
  width: 40%;
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
  color: #000;
`;

const Logo = styled.img.attrs({
  src: LogoImage,
})`
  width: 75px;
  height: 65px;
  background-color: #fff;
  border-radius: 30px;
`;

export { Container, Nav, Logo, AreaLogo };
