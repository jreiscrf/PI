import styled from "styled-components";

const Container = styled.input``;

const Body = styled.body`
  background-color: #dddddd;
  font-family: "Montserrat", sans-serif;
`;

const Main = styled.main`
  background-color: #fff;
`;

const TituloBanner = styled.h2`
  font-family: "Italianno", cursive;
  position: absolute;
  display: inline-block;
  margin-left: 40px;
  margin-top: 80px;
  font-weight: bold;
  color: #a04d20;
  text-align: center;
  font-size: 4.125rem;
`;

const HomeBanner = styled.img`
  display: inline-block;
  width: 100%;
  height: 630px;
  border-radius: 17px;
`;

const TitlesHome = styled.h2`
  color: #000;
  background-color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

const HomeDepoimentos = styled.div`
    width: 50%;
    background-color: #FFF;
    text-align: center;
    font-family: "Montserrat", sans-serif";
    float: left !important;
`;

const HomeDepoimentos2 = styled.div`
    width: 50%;
    background-color: #FFF;
    text-align: center;
    font-family: "Montserrat", sans-serif";
    float: right !important;
`;

export {
  TitlesHome,
  HomeDepoimentos,
  HomeDepoimentos2,
  // HomeDepoimentos3,
  Container,
  Body,
  Main,
  TituloBanner,
  HomeBanner,
};
